import express from "express";
const app = express()
import { config } from "dotenv";
import connectDB from "./db.js";
import userRoutes from "./routes/userRoutes.js";
config()
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.json())

//routes

// const tweetRoutes = (await import('./routes/tweetRoutes.js')).default;

app.use('/api/users', userRoutes);
// app.use('/api/tweets', tweetRoutes);
app.listen(PORT, () => console.log("Server running at PORT", PORT))