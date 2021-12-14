import react from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  {logout}  from '../../Reducer/userReducer';

const NavBar = () =>{
    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()
    return(
    <div className="navBar">
        <div className="navbar_container">
            <div className="navBar_header"> Test app </div>
            {!isAuth && <div className="navBar_signIn"><NavLink to= '/login'>Sign in</NavLink></div>}
            {!isAuth && <div className="navBar_signUp"><NavLink to= '/registration'>Sign up</NavLink></div>}
            {isAuth && <div className="navBar_signIn" onClick={()=>dispatch(logout())}>Sign out</div> }
            
            
        </div>

    </div>)
}


export default NavBar
