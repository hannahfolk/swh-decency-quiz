const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    const users = await User.find();
    res.json(users);
  },
  async saveScore(req, res) {
    const { body } = req;
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    return res.json(user);
  },
};
