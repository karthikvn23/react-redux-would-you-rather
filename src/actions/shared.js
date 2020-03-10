import { _getUsers, _getQuestions } from '../utils/_DATA'
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
                        dispatch(getUsers(users))
                        dispatch(getQuestions(questions))
                    }
                )
    }
}