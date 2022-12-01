import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(itemData) {
        let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

        if (itemFound) {
            let newCart = cart.map((itemInCart) => {
                if (itemInCart.id === itemData.id) {
                    itemInCart.count += itemData.count;
                }
                return itemInCart;
            });

            setCart(newCart);
        } else {
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart);
        }
    }

    function totalItemsInCart() {
        let total = 0;
        cart.forEach((itemInCart) => {
            total = total + itemInCart.count;
        });
        return total;
    }

    function totalPriceInCart() {
        let totalPrice = 0;
        cart.forEach((itemInCart) => {
            totalPrice = totalPrice + itemInCart.count * itemInCart.price;
        });
        return totalPrice;
    }

    function removeItem(itemId) {
        setCart(cart.filter((item) => {
            return item.id === itemId
        }))
    }

    function clear() {
        setCart([]);
    }

    const value = {
        cart,
        clear,
        addToCart,
        totalItemsInCart,
        removeItem,
        totalPriceInCart,
    };

    return (
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}

export default cartContext;