import axios from 'axios'

export const addUser = (user) => {
        return dispatch => {
            return axios.post('/api/addUser',user)
        }
    }
