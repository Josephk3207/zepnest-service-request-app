# Zepnest Service Request Application

A full-stack web application for creating and managing service requests.

## Features

- User Registration
- User Login
- JWT Authentication
- Create Service Request
- View Service Requests
- Update Request Status
- Delete Service Request
- MySQL Database Integration

## Tech Stack

### Frontend
- React
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Service Requests

- GET /api/service-requests
- POST /api/service-requests
- GET /api/service-requests/:id
- PUT /api/service-requests/:id/status
- DELETE /api/service-requests/:id

## How to Run the Project

### Prerequisites

- Node.js
- MySQL
- VS Code

### Database Setup

Run the database_schema.sql` file in MySQL Workbench.

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file and add:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=zepnest_service_db
JWT_SECRET=your_secret_key
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Open Application

Open:

http://localhost:5173

### API Testing

Import the Postman collection:

Zepnest_Service_Request_API_v2.postman_collection.json

and test the APIs using Postman.

## Author

Joseph Konigepogu
