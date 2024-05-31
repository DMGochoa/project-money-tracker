# Personal Finance Tracker

## Project Overview

The Personal Finance Tracker is a web application designed to help users manage their financial records. Users can track their income and expenses, categorize transactions, and view graphical representations of their financial data. The application is built using Node.js, Express, and Sequelize ORM for database management.

## Features

- User authentication and authorization
- Income and expense tracking
- Transaction categorization
- Database migrations and models
- RESTful API endpoints
- Data validation and error handling

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)
- [Docker](https://www.docker.com/) (for containerization)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/DMGochoa/project-money-tracker.git
    cd project-money-tracker
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure the environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for required variables.

4. Run database migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. Start the development server:
    ```sh
    npm start
    ```

### Docker Setup

To run the application using Docker, follow these steps:

1. Build the Docker image:
    ```sh
    docker-compose build
    ```

2. Run the Docker containers:
    ```sh
    docker-compose up
    ```

## Project Structure

The project structure is as follows:

```
project/
├── config/                 # Configuration files
├── db/                     # Database models and migrations
│   ├── migrations/
│   └── models/
├── libs/                   # Library files
├── middlewares/            # Custom middleware
├── routes/                 # API routes
├── schemas/                # Data validation schemas
├── services/               # Business logic
├── utils/                  # Utility functions
├── .eslintrc.json          # ESLint configuration
├── .sequelizerc            # Sequelize configuration
├── docker-compose.yml      # Docker Compose configuration
├── index.js                # Entry point
├── package.json            # NPM dependencies and scripts
└── README.md               # Project documentation
```

## Good Practices

- **Code Quality:** Use ESLint for consistent coding styles. The configuration file `.eslintrc.json` is included.
- **Environment Configuration:** Store configuration details and secrets in environment variables. Use a `.env` file and never commit it to version control.
- **Error Handling:** Implement centralized error handling using middleware. Check the `middlewares/errorHandler.js` for details.
- **Data Validation:** Validate incoming data using schemas. See `schemas/` directory for example validation schemas.
- **Authentication and Authorization:** Secure routes using authentication and authorization middleware. Refer to `middlewares/authHandler.js`.
- **Database Management:** Use Sequelize for ORM and manage database migrations efficiently. Migrations are located in `db/migrations/`.
- **Containerization:** Use Docker for consistent development and deployment environments. The `docker-compose.yml` file helps to set up the application in a containerized environment.

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

Distributed under the MIT License.

## Contact

Your Name - [diego.moreno@utp.edu.co](mailto:diego.moreno@utp.edu.co)

Project Link: [https://github.com/DMGochoa/project-money-tracker](https://github.com/DMGochoa/project-money-tracker)

