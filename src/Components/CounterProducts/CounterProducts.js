import "./CounterProducts.css";
import ButtonDetail from "../ButtonDetail/ButtonDetail";
import { useState } from "react";
import DisplayFlex from "../DisplayFlex/DisplayFlex";


function CounterProducts() {
    const [amount, setAmount] = useState(1);

    function clicks(e) {
        if (e.target.innerHTML === "+") {
            setAmount((amount > 4) ? amount : amount + 1)
        } else {
            setAmount((amount > 1) ? amount - 1 : amount)
        }
    }

    return (
        <div>
            <div className="flex">
                <button onClick={clicks} className="Buttons">-</button>
                <p>{amount}</p>
                <button onClick={clicks} className="Buttons">+</button>
            </div>
            <ButtonDetail detail="Agregar al carrito" />
        </div>


    )

}


export default CounterProducts;