# Task Manager Application

Welcome to the Task Manager application! This comprehensive readme will guide you through the installation, setup, and usage of this powerful task management tool. Built using the MERN stack, this application combines the best of React for the front end and Node.js with Express for the backend. The data is securely stored in MongoDB using the Atlas cloud service, ensuring your tasks are safe and accessible from anywhere.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- User-friendly interface for creating, updating, and managing tasks.
- Task completion notifications using Toastify library.
- Real-time updates and notifications.
- Secure user data storage with MongoDB Atlas.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Git: [Download and Install Git](https://git-scm.com/)

### Installation

1. Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/task-manager-Mern-Stack.git
```

2. Navigate to the cloned directory:

```bash
cd task-manager-Mern-Stack
```
3. Install dependencies:

```bash
    cd backend
    npm install
```
4. Create a `.env` file in the `backend` directory and configure the following environment variables:

```bash
   MONGODB_URI=your-mongodb-uri
```

5. Return to the frontend directory:

```bash
cd frontend
npm install
```
6. Start the Backend Server:

```bash
npm start
```
7. Start the Frontend:

```bash
npm run dev
```

The Task Manager application is now ready to use locally! You can access it at http://localhost:5173 

## Usage

1. Open a web browser and navigate to http://localhost:3000 to access the Task Manager application.
2. Click on the "Create Task" button to create a new task.
3. Click on the "Update Task" button to update an existing task.
4. Click on the "Delete Task" button to delete an existing task.
5. Click on the "Complete Task" button to mark a task as completed.

## Folder Structure

- Backend: Contains the Node.js and Express backend code.
- Frontend: Contains the React frontend code.
- Models: Defines MongoDB data models.
- Routes: Defines API routes.
- Config: Configuration files for MongoDB and authentication.
- Public: Static files served by the frontend.
- Src: React source code.

## API Endpoints

### Get Tasks

```js
GET /api/v1/tasks
```

### Create Task

```js
POST /api/v1/tasks
```

### Update Task

```js
PATCH /api/v1/tasks/:id
```

### Delete Task

```js
DELETE /api/v1/tasks/:id
```

### Complete Task

```js
PATCH /api/v1/tasks/:id/complete
```

## Deployment

To deploy the Task Manager application to a production environment, follow these general steps:

Set up a production-ready server with Node.js and MongoDB.
Configure environment variables for production (e.g., MONGODB_URI, JWT_SECRET).
Build the React frontend:

```bash
npm run build
```

1. Deploy the backend and frontend to your server.
2. Configure a reverse proxy (e.g., Nginx or Apache) to serve the React build.
3. Ensure your server is secure and uses HTTPS.
4. Set up a domain and point it to your server's IP address.
5. Update the frontend API URL to your production server in the React code.

## Technologies Used
The Task Manager application leverages the following technologies:

### Frontend:
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): A library for handling routing in React applications.
- [Redux](https://redux.js.org/) (or any state management library of your choice): For managing application state.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.

### Backend:
- [Node.js](https://nodejs.org/): A JavaScript runtime for server-side development.
- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing and managing data.
- [Mongoose](https://mongoosejs.com/): An ODM (Object Data Modeling) library for MongoDB.


### Deployment:
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): A cloud-based MongoDB database service for data storage.
- Hosting platform of your choice (e.g., [AWS](https://aws.amazon.com/), [Heroku](https://www.heroku.com/), [Netlify](https://www.netlify.com/)): For deploying and hosting the application.

These technologies were chosen to provide a robust and efficient stack for developing a feature-rich and responsive task management application.

## Contributing
Contributing to the Task Manager application is easy! Follow these steps:

1. Fork the repository and create a new branch.
2. Add your changes to the branch.
3. Push the branch to your forked repository.
4. Open a pull request on the repository.
5. Review and merge the pull request.



## 📝 License <a name="license"></a>

This project is [MIT](LICENSE.md) licensed


