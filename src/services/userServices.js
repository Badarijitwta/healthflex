import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import validator from 'validator'
import { config } from 'dotenv';
config()

const JWT_SECRET = process.env.JWT_SECRET
// console.log(JWT_SECRET)


const isValidPassword = (password) => {
  // Password must be at least 8 characters long
  // Password must contain at least one uppercase letter
  // Password must contain at least one lowercase letter
  // Password must contain at least one digit
  // Password must contain at least one symbol
  return (
    validator.isLength(password, { min: 6 }) &&
    validator.matches(password, /[A-Z]/) &&
    validator.matches(password, /[a-z]/) &&
    validator.matches(password, /\d/) &&
    validator.matches(password, /[-!$%^@&*()_+|~=`{}\[\]:";'<>?,.\/]/)
  );
};

const isValidUsername = (username) => {
  // Username must be at most 8 characters long
  // Username must contain only lowercase letters and digits
  return validator.isAlphanumeric(username) && validator.isLength(username, { max: 8 });
};

const registerUser = async (username, password) => {
  try {

    if (!isValidUsername(username)) {
      return { status: 400, message: 'Invalid username format' };
    }

    if (!isValidPassword(password)) {
      return { status: 400, message: 'Invalid password format' };
    }
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return { status: 400, message: 'User already exists' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();


    return { status: 201, message: 'User registered successfully' };
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username, password) => {
  console.log(username)
  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return { status: 400, message: 'Invalid credentials' };
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { status: 400, message: 'Invalid credentials' };
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return { status: 200, data: { token } };
  } catch (error) {
    throw error
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find().select('-password');
    return { status: 200, data: users };
  } catch (error) {
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
  getAllUsers
};
