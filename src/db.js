import { config } from "dotenv";
import mongoose from "mongoose";
config()

const mongoUri = process.env.MONGO_URI



const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log("Mongo DB Connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB