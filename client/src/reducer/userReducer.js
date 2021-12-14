const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false
}
export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                currentUser: action.payload.user,
                isAuth: true
                }
            default:
                return state
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                currentUser:{},
                isAuth: false
                }
            
            }
}

export const setUser = user => ({type:SET_USER, payload: user})
export const logout = () => ({type:LOGOUT})