import react from 'react';
import './Radio.css';
import RadioValue from '../RadioValue/RadioValue';


const Radio = (props) =>{
    return(
        <div className="set_radio">
            <div className="set_radio_text">{props.post.title}</div>
            {props.post.value.map((val, index)=>
                <RadioValue name = {props.post.title} val={val}/>
            )}
           
        </div>
    )
}
export default Radio

