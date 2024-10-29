# Task Tracker

This project is a simple Task Tracker web application built with React. It allows users to track tasks, view task charts, and log in with specific credentials.

## Getting Started

This project was bootstrapped with [task-tracker](https://github.com/nikita024/task-tracker).

### Available Scripts

In the project directory, you can run:

- `npm install`: Install the packages.
- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm run build`: Builds the app for production to the `build` folder.

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
```

## Project Features

### Create Task:
Users can add new tasks by filling in task details like task name, description, and status.

### Edit Task:
Users can update the task details such as name, description, and status after creation.

### Delete Task:
Users have the option to delete tasks from the task list.

### View Tasks in a Table:
All tasks are displayed in a table format, showing relevant task details for easy tracking and management.

### Task Chart Visualization:
The project includes a visual representation of tasks through charts, allowing users to see an overview of task completion and status distribution.




