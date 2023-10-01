import { Pieces } from "./Pieces";
import { Quantity } from "./Quantity";

interface CartItem{
    name: string,
    price: number,
    piece: Pieces,
    quantity: Quantity,
    count: number
}

export default CartItem;