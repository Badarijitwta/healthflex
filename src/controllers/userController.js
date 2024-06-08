import userService from '../services/userServices.js';

const registerUser = async (req, res) => {
  const { username, password } = req.body;


  try {
    const result = await userService.registerUser(username, password);
    console.log(result)
    return res.status(result.status).json(result.message);
  } catch (error) {
    return res.send(error.message)
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await userService.loginUser(username, password);
    return res.status(result.status).json(result.data || { message: result.message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};


export default {
  registerUser,
  loginUser,
  getAllUsers
};
