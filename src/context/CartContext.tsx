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
        let index = items.findIndex(i => (i.name === item.name && i.piece === item.piece && i.quantity === item.quantity));
        if(index !== -1){
            items[index].count++;
            setCart([...items])
        }
        else{
            setCart([...items, item]);
        }
    }

    function removeItem(index: number){
        if(items[index].count > 1){
            items[index].count--;
        }
        else{
            items.splice(index, 1);
        }
        setCart(JSON.parse(JSON.stringify(items)));
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
