import "../styles/components/CartCard.scss";
import CartItem from "../models/CartItem";
import { PiecesNames } from "../models/Pieces";
import { QuantityValues } from "../models/Quantity";

interface CartCardProps {
    cartItem: CartItem
    onAddToCart: ( item: CartItem ) => void,
    removeItem: ( ) => void
}

const CartCard = ({ cartItem, onAddToCart, removeItem }: CartCardProps) => {

    return(
        <div className="cart-item-card-cont">
            <div className="cart-item-details-cont">
                <div className="cart-item-name">{cartItem.name}</div>
                <div className="cart-item-specification-cont">
                    <div className="item-quantity-detail item-order-detail-box">{QuantityValues[cartItem.quantity]}</div>
                    <div className="item-pieces-detail item-order-detail-box"><b>{PiecesNames[cartItem.piece]}</b> Pieces</div>
                </div>
            </div>
            <div className="item-order-details-cont">
                <p className="item-order-price"><span className="rupees-symbol-small">&#8377;</span>{cartItem.price}</p>
                <div className="quantity-counter">
                    <button className="quantity-decrement-btn brand-btn-style" onClick={removeItem}>-</button>
                    <p className="item-order-count">{cartItem.count}</p>
                    <button className="quantity-increment-btn brand-btn-style" onClick={() => 
                        onAddToCart(cartItem)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard;