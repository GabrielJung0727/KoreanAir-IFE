const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user.' });
  }
};

const createUser = async (req, res) => {
  try {
    const { seat_number, name, language_preference } = req.body;
    const newUser = await User.create({ seat_number, name, language_preference });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, language_preference, dnd_mode } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ name, language_preference, dnd_mode });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user.' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
