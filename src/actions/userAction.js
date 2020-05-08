import axios from 'axios'

export const addUser = (user) => {
    return dispatch => {
        return axios.post('/api/addUser',user)
    }
}

export const checkUsernameExist = (username) => {
    return dispatch => {
        return axios.get(`/api/checkUser`,{
            params:{
                username:username
            }
        })
    }
}
