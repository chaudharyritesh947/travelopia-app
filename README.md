# Travelopia App

## Introduction

Travelopia App is a web application that allows users to create travel enquiries and view a list of travel enquiries. It provides a user-friendly interface to interact with the backend API and manage travel enquiries.

## Features

- Create new travel enquiries by providing source, destination, package details, person count, and contact information.
- View a list of existing travel enquiries with their details.
- Separate views for user and admin roles.
- User authentication and authorization.

## Technologies Used

- React.js
- Axios
- React Router DOM
- Bootstrap
- Node.js (for the backend API)
- Express.js
- MongoDB
- Mongoose

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js (version X.X.X or higher)
- MongoDB (running on localhost)

## Getting Started

1. Clone the repository:

git clone https://github.com/your-username/travelopia-app.git

2. Navigate to the project directory:

cd travelopia-app


3. Install dependencies:

npm install

4. Start the development server:

npm start

5. Open your browser and go to `http://localhost:3000` to view the app.

## Folder Structure

travelopia-app/
|- public/
|- src/
|- components/
|- pages/
|- App.js
|- index.js
|- package.json
|- README.md


## API Endpoints

The frontend interacts with the following backend API endpoints:

- Create Enquiry: POST http://localhost:4000/api/enquiry/create
- Get All Enquiries: GET http://localhost:4000/api/enquiry
- User Login: POST http://localhost:4000/api/login
- User Registration: POST http://localhost:4000/api/user/create

## Contributing

If you find any issues or have suggestions for improvement, feel free to open a new issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
