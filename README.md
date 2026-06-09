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

## Author

Joseph Konigepogu
