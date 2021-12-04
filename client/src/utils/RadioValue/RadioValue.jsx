import react from 'react';
import './RadioValue.css';


const RadioValue = (props) =>{
    return(
        <div className="container_radio_input"><input className="radio_value" type= 'radio' name={props.name}/><p>{props.val}</p></div>
    )
}
export default RadioValue