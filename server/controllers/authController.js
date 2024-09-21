const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err });
    User.create(username, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: 'User created!' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Auth failed' });
    const user = results[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) return res.status(401).json({ message: 'Auth failed' });
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};
