import { combineReducers } from 'redux'
import addUser from './userReducer'
import addMessages from './messageReducer'

const rootReducer = combineReducers({
        addUser,
        addMessages
    }
)

export default rootReducer
