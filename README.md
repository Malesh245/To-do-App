# React To-Do Application

This is a simple To-Do application built using React, Redux for state management, and Tailwind CSS for styling. The application allows users to add, view, edit, and delete tasks. It is designed to be responsive and interactive.

## Features

- Add a new task
- View the list of tasks
- Edit an existing task
- Delete a task
- Responsive design using Tailwind CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of React and Redux.

## Installation

To install and run this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Malesh245/To-do-App.git
   cd To-do App
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173` to view the application.

## Project Structure

Here is the project structure:

TO-DO-APP/
├── node_modules/
├── public/
│ ├── vite.svg
│ └── ...
├── src/
│ ├── assets
│ ├── components/
│ │ ├── TaskInput.jsx
│ │ ├── TaskList.jsx
│ ├── redux/
│ │ ├── actions.js
│ │ ├── reducers/
│ │ │ ├── index.js
│ │ │ └── tasksReducer.js
│ │ └── store.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

## Usage

### Adding a Task

To add a new task, type the task description into the input field and press the "Add Task" button or hit Enter.

### Viewing Tasks

All added tasks will be displayed in a list format below the input field.

### Editing a Task

To edit a task, click the "Edit" button next to the task. Modify the task description and press the "Save" button to update the task.

### Deleting a Task

To delete a task, click the "Delete" button next to the task.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **Tailwind CSS**: Utility-first CSS framework.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- Malesh Kumar
- maleshkumar12345@gmail.com
- https://github.com/Malesh245
