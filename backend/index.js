const express = require('express');
const routerApi = require('./routes');

const { checkApiKey } = require('./middlewares/authHandler');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

routerApi(app);

require('./utils/auth');

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', checkApiKey, (req, res) => {
  res.send('Hello Test!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
