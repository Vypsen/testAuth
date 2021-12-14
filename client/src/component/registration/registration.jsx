import react, {useState} from 'react';
import '../Authorization.css';
import Input from '../../utils/Input/Input'
import Radio from '../../utils/Radio/Radio';
import addUser from '../../action/AddUser';

const Registration = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[name, setName] = useState("")
    const[second_name, setSecond_name] = useState("")
    const[patronymic, setPatronymic] = useState("")
    const[sex, setSex] = useState("")
    const[age, setAge] = useState("")
    const[diagnostic, setDiagnostic] = useState("")
    
    return(
    <div className="authorization">
        <center className="authorization_header">Регистрация</center>
        <div className="authorization_container">
            <Input value={second_name} setValue = {setSecond_name} type='text' placeholder = {"Фамилия"}/>
            <Input value={name} setValue = {setName} type='text' placeholder = {"Имя"}/>
            <Input value={patronymic} setValue = {setPatronymic} type='text' placeholder = {"Отчество"}/>
            <Input value={age} setValue = {setAge} type='number' placeholder = {"Возраст"}/>
            <Radio value={sex} setValue = {setSex} post={{title:"Пол", input:["Мужской","Женский"]}}/>
            <Radio value={diagnostic} setValue = {setDiagnostic} post={{title:"Диагноз", input:["Левоееееееееееееееее","Правоееееееееееееееееееее"]}}/>
            <Input value={email} setValue = {setEmail} type='text' placeholder = {"Адрес электронной почты"}/>
            <Input value={password} setValue = {setPassword} type='password' placeholder = {"Придумайте пароль"}/>
        </div>
        <button className="authorization_button" onClick={()=>addUser(name, second_name, patronymic, age,sex,diagnostic, email, password)}>Зарегистрироваться</button>
    </div>)
}


export default Registration
