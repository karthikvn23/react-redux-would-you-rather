import { _getUsers, _getQuestions } from '../utils/_DATA'
import { getInitialData } from '../utils/api';
import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'

export function handleInitialData (){
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
                .then(
                    ([users, questions]) => {
                        const obj = {
                            users,
                            questions
                        }
                        return obj
                    }
                )
                .then(
                    ({users, questions}) => {
                        console.log('users: ', users)
                        console.log('questions: ', questions)
                        dispatch(getUsers(users))
                        dispatch(getQuestions(questions))
                    }
                )
    }
}