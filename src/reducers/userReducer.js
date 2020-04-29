import {ADD_USER} from '../constants'
function addUser(state={},action) {
    switch(action.type) {
        case ADD_USER:
            console.log(action.data)
            return {
                ...state,
                ...action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default addUser
