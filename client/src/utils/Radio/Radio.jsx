import react, {useState} from 'react';
import './Radio.css';
import RadioValue from '../RadioValue/RadioValue';


const Radio = (props) =>{
    return(
        <div className="set_radio">
            <div className="set_radio_text">{props.post.title} </div>
            {props.post.input.map((val, index)=>
                <RadioValue
                    value = {props.value}
                    setValue = {props.setValue}
                    name = {props.post.title}
                    val={val}
                    key={index}
                />)}
        </div>
    )
}
export default Radio

