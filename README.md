# Task-3-sandhya-charlet-calista
Student Management System API

Project Overview

This project is a backend application developed using Node.js, Express.js, and MongoDB. It demonstrates how to connect a backend server with a database and perform CRUD (Create, Read, Update, Delete) operations on student records.

Features

- Connects Node.js backend to MongoDB database
- Creates new student records
- Retrieves all student records
- Retrieves a specific student record
- Updates existing student information
- Deletes student records
- Handles JSON data efficiently

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API Testing)

Database Schema

Student Collection:

- Name (String, Required)
- Age (Number, Required)
- Department (String, Required)

API Endpoints

Create Student

POST /students

Get All Students

GET /students

Get Single Student

GET /students/:id

Update Student

PUT /students/:id

Delete Student

DELETE /students/:id

Installation

1. Clone the repository
2. Install dependencies

npm install

3. Start MongoDB service
4. Run the server

node server.js

Output

Server running on port 3000

MongoDB Connected

Learning Outcomes

- Understanding MongoDB integration
- Working with Mongoose models and schemas
- Implementing REST APIs
- Performing CRUD operations
- Managing backend data storage

Author

Sandhya Charlet Calista
B.Tech Artificial Intelligence and Data Science

