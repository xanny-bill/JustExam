const db = require('../models/db');

const Exam = db.exam;
const User = db.user;

const medthods = {
  async getById(eid) {
    return Exam.findAll({
      where: { eid },
    });
  },

  async addAll(uid) {
    return Exam.addAll({
      include: {
        model: User,
        attributes: [],
        where: { userid: uid },
      },
    });
  },

};

module.exports = {
  ...medthods,
};
