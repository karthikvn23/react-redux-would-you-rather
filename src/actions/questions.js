export const GET_QUESTIONS = 'RECEIVE_QUESTIONS';

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}