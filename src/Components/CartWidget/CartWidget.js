import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

function CartWidget() {
    return (
        <>
            <FontAwesomeIcon className="iconCart" icon={faCartShopping} />
        </>
    )
}

export default CartWidget;