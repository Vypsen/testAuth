import react, {useState} from 'react';
import '../Authorization.css';
import Input from '../../utils/Input/Input'
import loginUser from '../../action/LoginUser'; 
import {useDispatch} from 'react-redux'

const Login = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()

    return(
    <div className="authorization">
        <center className="authorization_header">Авторизация</center>
        <div className="authorization_container">
            <Input value={email} setValue = {setEmail} type='text' placeholder = {"Адрес электронной почты"}/>
            <Input value={password} setValue = {setPassword} type='password' placeholder = {"Пароль"}/>
        </div>
        <button className="authorization_button" onClick={()=>dispatch(loginUser(email, password))}>Войти</button>
    </div>)
}


export default Login
