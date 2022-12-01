import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { useContext } from "react";
import cartContext from "../../storage/CartContext";

function CartWidget() {
console.log(useContext(cartContext))
    const { totalItemsInCart } = useContext(cartContext);
console.log("asd1")
    return (
        <div>
            <FontAwesomeIcon className="iconCart" icon={faCartShopping} />
            {totalItemsInCart() > 0 ? (<><span>{totalItemsInCart()}</span></>) : (<></>)}
        </div>
    );
}

export default CartWidget;