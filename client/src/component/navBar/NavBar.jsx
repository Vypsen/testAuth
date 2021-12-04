import react from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
    <div className="navBar">
        <div className="navbar_container">
            <div className="navBar_header"> Test app </div>
            <div className="navBar_signIn"><NavLink to= '/login'>Sign in</NavLink></div>
            <div className="navBar_signUp"><NavLink to= '/registration'>Sign up</NavLink></div>
        </div>

    </div>)
}


export default NavBar
