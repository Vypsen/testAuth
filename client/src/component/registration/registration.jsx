import react, {useState} from 'react';
import './registration.css';
import Input from '../../utils/input/input'
import Radio from '../../utils/Radio/Radio';

const Registration = () =>{


    return(
    <div className="registration">
        <center className="registration_header">Регистрация</center>
        <div className="registration_container">
            <Input type='text' placeholder = {"Фамилия"}/>
            <Input type='text' placeholder = {"Имя"}/>
            <Input type='text' placeholder = {"Отчество"}/>
            <Radio post={{title:"Пол", value:["Мужской","Женский","другое"]}}/>
            <Radio post={{title:"Диагноз", value:["Левоееееееееееееееее","Правоееееееееееееееееееее"]}}/>
            <Input type='text' placeholder = {"Адрес электронной почты"}/>
            <Input type='password' placeholder = {"Придумайте пароль"}/>
        </div>
        <button className="registration_button">Зарегистрироваться</button>
    </div>)
}


export default Registration
