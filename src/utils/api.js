import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      console.log('users: ', users)
      console.log('questions: ', questions)
      const obj = {
          users,
          questions
        }
      return obj
    }
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authUser, qid, answer) {
  // console.log('info', { authUser, qid, answer });
  return _saveQuestionAnswer({ authUser, qid, answer });
}
