const utils = require('sequelize');
const Exam = require('../services/exam.service');

module.exports = {
  create_new_exam(req, res, next, body) {
    Exam.create_new_exam(body)
      .then((response) => {
        utils.writeJson(res, response);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  },

  delete_exam(req, res, next, eid) {
    Exam.delete_exam(eid)
      .then((response) => {
        utils.writeJson(res, response);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  },

  get_all_exam(req, res, next) {
    Exam.get_all_exam()
      .then((response) => {
        utils.writeJson(res, response);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  },

  get_exam(req, res, next, eid) {
    Exam.get_exam(eid)
      .then((response) => {
        utils.writeJson(res, response);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  },

  update_exam(req, res, next, body, eid) {
    Exam.update_exam(body, eid)
      .then((response) => {
        utils.writeJson(res, response);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  },
};
