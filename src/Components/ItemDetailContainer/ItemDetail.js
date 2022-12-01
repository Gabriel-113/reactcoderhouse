import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);

    const { cart, addToCart } = useContext(cartContext);

    let itemInCart = cart.find((item) => product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.count;

    function onAddToCart(count) {


        const itemForCart = {
            ...product,
            count,
        };

        addToCart(itemForCart);
        setIsInCart(true);
    }

    return (
        <div className="">
            <div className="">
                <img src={product.imagen} alt="" />
            </div>
            <div className="">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4 className="">$ {product.price}</h4>
            </div>
            {!isInCart ? (<ItemCount text="Agregar al carrito" onAddToCart={onAddToCart} stock={stock} />) :
                (<div>
                    <Link to="/cart"><button>Ir al Carrito</button></Link>
                    <Link to="/"><button>Regresar al Catalogo</button></Link>
                    <button>Eliminar del carrito</button>
                </div>)}
        </div>
    );
}

export default ItemDetail;