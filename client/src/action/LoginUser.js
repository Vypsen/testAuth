import axios from 'axios'
import { setUser } from '../Reducer/userReducer'
export const loginUser =  (email, password) =>{
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login',{
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (error) {
           alert(error)
        }
    }
}

export const auth = () =>{
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth',
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (error) {
           alert(error.response.data.message)
           localStorage.removeItem('token')
        }
    }
}

