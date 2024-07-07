import React from "react";
import '../Estilos/AccionesProducto.css';
import { useState } from 'react';

export default function AccionesProducto(){
    const [count, setCount] = useState(1);

    function handleClick(){
        setCount(count + 1);
    }

    function amountRest(){
        if(count > 1){
            setCount(count -1)
        }
    }

    return(
        <div className="containerBtn">
            <button className="btn" onClick={amountRest}>-</button>
            <div className="amount">{count}</div>
            <button className="btn" onClick={handleClick}>+</button>
        </div>
    );
}