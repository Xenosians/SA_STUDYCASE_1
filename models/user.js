const db = require('../utils/db');

module.exports = class Subscription {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static createUser(name, email, password, role) {
    return db.execute(
      'INSERT INTO `user` (`name`,`email`,`password`,`subscription_price`) VALUES (?,?,?,?)',
      [name, email, password, role]
    );
  }
};
