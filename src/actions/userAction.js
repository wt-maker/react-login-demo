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

export const login = (user) => {
    return dispatch => {
        return axios.post('/api/login',user)
    }
}
