const User = require('../models/user');

module.exports = class UserController {
  static postUser = (req, res, next) => {
    if (
      !req.body.some((body) =>
        ['name', 'email', 'password', 'role'].includes(body)
      ) ||
      !['admin', 'user'].includes(req.body.role)
    ) {
      return res.status(400).json({ message: 'error' });
    }

    User.createUser(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.role
    )
      .then(([result]) => {
        const userData = result[0];
        return res.status(200).json({ message: 'User added', data: userData });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ message: err.message });
      });
  };
};
