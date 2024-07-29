import React, { useState } from "react";
import '../Estilos/AccionesProducto.css';

export default function AccionesProducto({ producto, onAddToCart }) {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(count + 1);
   }

    function amountRest() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleAddToCart() {
        console.log(`añadir al carro: ${JSON.stringify({ ...producto, cantidad: count })}`);
        onAddToCart({ ...producto, cantidad: count });
    }

    return (
        <>
            <div className="container-btn__main">
            <div className="containerBtn">
                <button className="btnAc" onClick={amountRest}>-</button>
                <div className="amount">{count}</div>
                <button className="btnAc" onClick={handleClick}>+</button>
            </div>
            <button className="btn_add-to-cart" onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </>
    );
}
