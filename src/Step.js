import {useState, useRef} from 'react';
import './Step.css';


function Step(props) {

    const inputEl = useRef();

    return (
        <div className="step">
           
            <p>
                Kroki: <input ref={(count) => {inputEl = count} } type="number" />
            </p>
            
        </div>
    )
}



export default Step;