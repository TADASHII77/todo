Todo App Frontend

This is the frontend for the Todo App, built using React.js with Tailwind CSS. It allows users to register, log in, and manage their todos.

Features

User authentication (Login & Register)

Secure token storage using localStorage

Add, Edit, Delete, and View todos

Responsive UI using Tailwind CSS

Tech Stack

React.js (with hooks)

React Router for navigation

Axios for API requests

Tailwind CSS for styling

Setup Instructions

Prerequisites

Install Node.js

Installation

Clone the repository:

git clone https://github.com/your-repo/todo-frontend.git
cd todo-frontend

Install dependencies:

npm install

Configure the backend API URL in src/utils/api.js:

const API_BASE_URL = "http://localhost:8084/api";
export default API_BASE_URL;

Start the development server:

npm start

The app will be available at http://localhost:3000.

Folder Structure

├── src
│   ├── components    # Reusable components
│   ├── pages         # Page components (Login, Register, Todo)
│   ├── utils        # API requests
│   ├── App.js       # Main application file
│   ├── index.js     # Entry point
│
├── public
├── package.json

Available Pages

Login (/login) → User login page

Register (/) → User registration page

Todos (/todos) → Todo list and management

API Integration

The frontend communicates with the backend via the following endpoints:

POST /api/register → Register new users

POST /api/login → Authenticate users and receive a token

GET /api/todos → Retrieve user-specific todos

POST /api/todos → Add a new todo

PUT /api/todos/:id → Update an existing todo

DELETE /api/todos/:id → Delete a todo



Todo App Backend

This is the backend for the Todo App, built using Express.js with PostgreSQL as the database. It provides authentication and CRUD operations for managing todos.

Features

User authentication (Register & Login) using JWT

Create, Read, Update, and Delete (CRUD) operations for todos

Password hashing using bcrypt

Secure API with authentication middleware

Tech Stack

Node.js

Express.js

PostgreSQL

JWT Authentication

bcryptjs for password hashing

dotenv for environment variables

Setup Instructions

Prerequisites

Install Node.js

Install PostgreSQL

Installation

Clone the repository:

git clone https://github.com/your-repo/todo-backend.git
cd todo-backend

Install dependencies:

npm install

Create a .env file in the root directory and add the following:

DATABASE_URL=postgres://username:password@localhost:5432/tododb
JWT_SECRET=your_secret_key
PORT=8084

Set up the PostgreSQL database:

CREATE DATABASE tododb;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  due_date DATE,
  category TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

Running the Server

Start the backend server:

npm run dev

The server will start on http://localhost:8084.

API Endpoints

Authentication

POST /api/register → Register a new user

POST /api/login → Login user and receive JWT token

Todo Operations (Require Authorization Header: Bearer <token>)

GET /api/todos → Fetch user todos

POST /api/todos → Create a new todo

PUT /api/todos/:id → Update an existing todo

DELETE /api/todos/:id → Delete a todo

License

This project is open-source and available under the MIT License.
