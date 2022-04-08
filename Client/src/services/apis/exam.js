import axios from 'axios';
import mapperTool from './examMapper';

const BACKEND_HOST = 'http://localhost:3000';

const exams = () => axios.get(`${BACKEND_HOST}/api/exams`);

const examList = (eid) => axios.get(`${BACKEND_HOST}/api/exams/${eid}/questions`);

const createExams = async (examData) => axios.post(
  `${BACKEND_HOST}/api/exams`,
  { data: { title: examData.title, description: examData.description } },
  { validateStatus: false },
);

const loginGoogle = async () => axios.get(`${BACKEND_HOST}/api/auth/google`);

const createQuestions = async (eid, data) => axios.post(`${BACKEND_HOST}/api/exams/${eid}/questions`, { data }, { validateStatus: false });
const updateQuestions = async (eid, data) => axios.put(`${BACKEND_HOST}/api/exams/${eid}/questions`, { data }, { validateStatus: false });

const examMapper = (examData) => examData.map((element) => mapperTool.mapper(element));
const reverse = (examData) => mapperTool.convertToCLI(examData);

export default {
  exams,
  examList,
  createExams,
  loginGoogle,
  examMapper,
  createQuestions,
  reverse,
  updateQuestions,
};
