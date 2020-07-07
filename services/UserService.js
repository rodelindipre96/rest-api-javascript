const { User } = require('../models');

module.exports = {
  create: (body) => new User(body).save(),
  findAll: () => User.find(),
  findOneById: (id) => User.findById(id),
  updateOne: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  deleteOneById: (id) => User.findByIdAndDelete(id),
};
