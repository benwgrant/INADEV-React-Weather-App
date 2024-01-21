# Weather Forecast Application

## Overview
This Weather Forecast Application is a full-stack web application designed to provide current weather information based on user-provided ZIP codes. It showcases client-side and server-side development integration, along with external API interaction, using React.js and Node.js.

## Technologies Used

### Frontend
- **React.js**: Constructs the user interface, enabling dynamic data updates and state management.
- **CSS**: Styles the application for a responsive and appealing layout.

### Backend
- **Node.js**: The runtime environment for the backend server.
- **Express.js**: Handles HTTP requests and responses in the backend.
- **Axios**: A promise-based HTTP client used for API requests.

### Additional Tools
- **Docker**: Containers for both the frontend and backend, ensuring environment consistency.
- **CORS (Cross-Origin Resource Sharing)**: Manages cross-origin requests between frontend and backend.

## Features

- **Weather Data Retrieval**: Fetches and displays weather data based on user-input ZIP codes.
- **Responsive UI**: Adapts to various screen sizes.
- **Sanitized User Input**: Validates the ZIP code input for processing.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/benwgrant/INADEV-React-Weather-App.git
   ```

2. **Backend Setup**:
- Navigate to the backend directory:
  ```
  cd backend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the backend server:
  ```
  node server.js
  ```

3. **Frontend Setup**:
- Navigate to the react-weather-app directory:
  ```
  cd ..     (if in backend folder)
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the frontend application:
  ```
  npm start
  ```
- Access the application in a web browser at `http://localhost:3000`.
