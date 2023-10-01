import { createContext, useState,  useContext } from "react";
import CartItem from "../models/CartItem";

interface CartContextType {
    items: CartItem[],
    addToCart: (item: CartItem) => void,
    removeItem: (index: number) => void
}

const CartContext = createContext<CartContextType>({ items: [], addToCart: () => {}, removeItem: () => {}});

const CartProvider = ({children}: {children: any}) => {
    const [items, setCart] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        setCart([...items, item]);
    }

    function removeItem(index: number){
        setCart(items.splice(index, 1));
    }

    return (
        <CartContext.Provider value={{ items, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    return useContext(CartContext);
}

export { CartProvider as default, useCart };
