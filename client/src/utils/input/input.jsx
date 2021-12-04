import react from 'react';
import './input.css';


const Input = (props) =>{
    return(
    <input type= {props.type} placeholder={props.placeholder} name = {props.name} />
    )
}
export default Input
