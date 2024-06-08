# Twitter-Like Backend System

This project is a simplified backend system similar to Twitter, built using Node.js, Express.js, and MongoDB. It adheres to Domain-Driven Design (DDD) principles and includes functionalities for user registration, posting tweets, fetching user timelines, authentication using JWT, and cursor-based pagination.

## Live Demo

Check out the live demo [here](https://healthflex.vercel.app/).

## Features

- User Registration
- User Login
- Post a Tweet
- Fetch User Timeline
- Basic Authentication with JWT
- Cursor-based Pagination
- MongoDB Indexing

## Requirements

- Node.js (v14 or later)
- MongoDB (Atlas or Local)
- npm or yarn

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/twitter-like-backend.git
   cd twitter-like-backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a .env file in the root directory and add the following environment variables**:

   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=twitter-simplified
   JWT_SECRET=your_jwt_secret
   AUTH_PASS=your_pass
   ```

4. **Configuration**:<br/>
   Database Connection: Update MONGO_URI in the .env file with your MongoDB connection string. <br/>
   JWT Secret: Set JWT_SECRET in the .env file to a secure string for JWT token generation.<br/>

5. **Running the Project**:

   **_Start the server_**:

   ```bash
   npm start
   ```

   The server will start at http://localhost:5000.

# API Endpoints

## User Registration

**URL:** `/api/users/register`  
**Method:** `POST`

**Body (JSON):**

```json
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

## User Login

**URL:** `/api/users/login`  
**Method:** `POST`

**Body (JSON):**

```json
{
  "username": "yourusername",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

## Post a Tweet

**URL:** `/api/tweets`  
**Method:** `POST`

**Headers:**

```
Authorization: Bearer <your_jwt_token>
```

**Body (JSON):**

```json
{
  "text": "This is a sample tweet"
}
```

**Response:**

```json
{
  "_id": "tweet_id",
  "userId": "user_id",
  "text": "This is a sample tweet",
  "createdAt": "2024-06-08T10:00:00.000Z"
}
```

## Fetch User Timeline

**URL:** `/api/users/:userId/timeline`  
**Method:** `GET`

**Headers:**

```
Authorization: Bearer <your_jwt_token>
```

**Params:**

- `userId`: user_id

**Query Params:**

- `cursor` (optional): The ID of the last tweet from the previous request.
- `limit` (optional): The number of tweets to fetch. Default is 10
