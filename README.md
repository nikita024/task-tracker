# Task Tracker

This project is a simple Task Tracker web application built with React. It allows users to track tasks, view task charts, and log in with specific credentials.

## Getting Started

This project was bootstrapped with [task-tracker](https://github.com/nikita024/task-tracker).

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

## Login Feature

### User Login

The application includes a login feature where users can log in using specific credentials stored in a JSON file. The login form validates the user's email and password against the following user data:

```json
[
    {
      "username": "nikita",
      "email": "nikita@gmail.com",
      "password": "nikita123"
    },
    {
      "username": "admin",
      "email": "admin@gmail.com",
      "password": "admin123"
    }
]


