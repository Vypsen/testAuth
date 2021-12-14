import axios from 'axios'
import { setUser } from '../Reducer/userReducer'
const loginUser =  (email, password) =>{
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

export default loginUser