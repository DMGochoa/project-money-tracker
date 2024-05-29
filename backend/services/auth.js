const { boom } = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const { config } = require('./../config/db');
const UserService = require('./user')
const userService = new UserService();

class AuthService {

  async getUser(email, password) {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }

    delete user.dataValues.password;
    return user;
  }

  async signToken(user) {
    payload = {
      sub: user.id,
      isActive: user.isActive,
      role: user?.role || 'admin',
    }
    return jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: '1d' });
  }

  async sendRecovery(email) {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw boom.notFound();
    }
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15m' });
    const link = `http://myfrontend.com/recovery?token=${token}`;
    // service.update(user.id, { recoveryToken: token }) Esto se hace para guardar el token de recovery en la base de datos
    const mail = {
      from: config.email,
      to: `${user.email}`,
      subject: 'Email for password recovery',
      html: `<b>Enter to this link => ${link}</b>`
    }
    const response = await this.sendMail(mail);
    return response;
  }

  async sendMail(infoMail) {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw boom.notFound();
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.email,
        pass: config.emailPassword
      }
    });
    await transporter.sendMail(infoMail);
    return { message: 'Email sent' };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await userService.getUserById(payload.sub);
      // if (user.recoveryToken !== token) {
      //   throw boom.unauthorized();
      // }
      const hash = await bcrypt.hash(newPassword, 10);
      await userService.update(user.id,
        {
          password: hash,
          // recoveryToken: null
        });
      return { message: 'Password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
}

module.exports = AuthService;
