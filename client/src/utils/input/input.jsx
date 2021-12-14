import react from 'react';
import './Input.css';


const Input = (props) =>{
    return(
    <input
        value = {props.value}
        onChange = {(event)=>props.setValue(event.target.value)}
        type= {props.type}
        placeholder={props.placeholder}
        name = {props.name}
    />)
}
export default Input
