// index.js is used to combine the reducers. Combine reducer is invoked here
import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import questions from './questions'

export default combineReducers(
    {
        authedUser,
        questions,
        users
    }
)