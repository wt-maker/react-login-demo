import {ADD_MESSAGE, DELETE_MESSAGE} from '../constants'
import shortid  from 'shortid'
import findIndex from "lodash/findIndex"

const addMessages = (state = [], action={}) => {
    console.log(state)
    switch(action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    id:shortid.generate(),
                    type:action.message.type,
                    text:action.message.text
                }
            ]
            break
        case DELETE_MESSAGE:
            const index = findIndex(state, {id:action.id})
            if(index>=0) {
                return [
                    ...state.slice(0,index),
                    ...state.slice(index+1)
                ]
            }
            break
        default:
            return state
    }
}

export default addMessages