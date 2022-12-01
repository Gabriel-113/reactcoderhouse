import "./ItemCount.css";
import ButtonDetail from "../ButtonDetail/ButtonDetail";
import { useState } from "react";



function ItemCount() {
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


export default ItemCount;