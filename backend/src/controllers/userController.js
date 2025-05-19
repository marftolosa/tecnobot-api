const User = require('../models/user');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Get user by ID
exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Create user
exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

// Update user
exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  await user.update(req.body);
  res.json(user);
};

// Delete user
exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  await user.destroy();
  res.json({ message: 'User deleted' });
};
