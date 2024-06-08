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

.env
`bash
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=twitter-simplified
    JWT_SECRET=your_jwt_secret
    AUTH_PASS=your_pass
    `

4. **Start the server**:

```bash
  npm start
```

5. **Configuration**:
   Database Connection: Update MONGO_URI in the .env file with your MongoDB connection string.
   JWT Secret: Set JWT_SECRET in the .env file to a secure string for JWT token generation.

6. **Running the Project**:
   **_Start the server_**:

```bash
npm start
```

The server will start at http://localhost:5000.

API Endpoints
User Registration
URL: /api/users/register
Method: POST
Body (JSON):
json
Copy code
{
"username": "yourusername",
"password": "yourpassword"
}
Response:
json
Copy code
{
"message": "User registered successfully"
}
User Login
URL: /api/users/login
Method: POST
Body (JSON):
json
Copy code
{
"username": "yourusername",
"password": "yourpassword"
}
Response:
json
Copy code
{
"token": "your_jwt_token"
}
Post a Tweet
URL: /api/tweets
Method: POST
Headers:
Authorization: Bearer <your_jwt_token>
Body (JSON):
json
Copy code
{
"text": "This is a sample tweet"
}
Response:
json
Copy code
{
"\_id": "tweet_id",
"userId": "user_id",
"text": "This is a sample tweet",
"createdAt": "2024-06-08T10:00:00.000Z"
}
Fetch User Timeline
URL: /api/users/:userId/timeline
Method: GET
Headers:
Authorization: Bearer <your_jwt_token>
Params:
userId: user_id
Query Params:
cursor (optional): The ID of the last tweet from the previous request.
limit (optional): The number of tweets to fetch. Default is 10.
Response:
json
Copy code
[
{
"_id": "tweet_id",
"userId": "user_id",
"text": "This is a sample tweet",
"createdAt": "2024-06-08T10:00:00.000Z"
},
...
]
Testing with Postman
Import the collection: Download the Postman collection from here and import it into Postman.
Set environment variables:
Authorization: Bearer <your_jwt_token> (obtained from the login endpoint).
Make requests:
Register a new user.
Login to get the JWT token.
Post a tweet.
Fetch the user timeline.
Example Requests
Register User
Method: POST
URL: https://healthflex.vercel.app/api/users/register
Body:
json
Copy code
{
"username": "testuser",
"password": "Test@1234"
}
Login User
Method: POST
URL: https://healthflex.vercel.app/api/users/login
Body:
json
Copy code
{
"username": "testuser",
"password": "Test@1234"
}
Post Tweet
Method: POST
URL: https://healthflex.vercel.app/api/tweets
Headers:
Authorization: Bearer <your_jwt_token>
Body:
json
Copy code
{
"text": "This is a sample tweet"
}
Fetch Timeline
Method: GET
URL: https://healthflex.vercel.app/api/users/<user_id>/timeline
Headers:
Authorization: Bearer <your_jwt_token>
Query Params:
limit: 10
cursor: <last_tweet_id>
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

perl
Copy code

Make sure to replace the placeholder values like `<your_jwt_token>`, `<user_id>`, `<last_tweet>

```

```
