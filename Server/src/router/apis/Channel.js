const router = require('express').Router({ mergeParams: true });
const controller = require('../../controllers/Channel.controller');
router.use('/:cid/members', require('./Member'));
router.use('/:cid/options', require('./Option'));
router.use('/:cid/exams', require('./ExamChannel'));
router.use('/:cid/answer', require('./Answer'));

// all user
router.get('/', controller.getChannel);

// teacher only
router.post('/', controller.addChannel);

// owner(teacher) & member(student) only
router.get('/:cid', controller.getChannelById);

// owner(teacher) only
router.put('/:cid', controller.updateChannel);

// owner(teacher) only
router.delete('/:cid', controller.deleteChannel);

// student member only
router.get('/:cid/startExam', controller.continue);

// student member only
router.post('/:cid/submitExam', controller.submitExam2);

// owner(teacher) only
router.put('/:cid/sendmail', controller.sendEmail);

router.delete('/:cid/leave', controller.leaveMember);


module.exports = router;
