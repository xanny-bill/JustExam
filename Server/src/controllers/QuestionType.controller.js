const queationType = require('../services/queationType.service');
const stdCode = require('./stdCode');

module.exports = {

  async getQuestionType(req, res) {
    try {
      const data = await queationType.getAll();
      stdCode.querySuccess(data, res);
    } catch (e) {
      stdCode.Unexpected(e, res);
    }
  },

  addQuestionType(req, res) {
    stdCode.NotImplemented(stdCode.inCurrectPath(req), res);
  },

  updateQuestionType(req, res) {
    stdCode.NotImplemented(stdCode.inCurrectPath(req), res);
  },

  deleteQuestionType(req, res) {
    stdCode.NotImplemented(stdCode.inCurrectPath(req), res);
  },
};
