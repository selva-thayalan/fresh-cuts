import "../styles/routes/Cart.scss";
import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();
    const { items, addToCart, removeItem } = useCart();

    return(
        <div className="cart-page-cont">
            <div className="cart-page-header t_align_l"><h3>Order Summary</h3></div>
            <div className="cart-items-list-cont">
                {items.length > 0 ? 
                    items.map((c, i) => {
                        return <CartCard 
                            key={c.name} 
                            cartItem={c}
                            removeItem={() => removeItem(i)}
                            onAddToCart={addToCart} />
                    }) :
                    <div className="empty-cart-info-cont">
                        Your cart is empty!
                    </div> }
            </div>
            {items.length > 0 ? <div className="cart-footer-cont">
                <div className="cart-summary-cont">
                    <b>Total: </b>
                    <span className="rupees-symbol-small">&#8377;</span>
                    {items.reduce((prev, curr) => (prev + (curr.price * curr.count)), 0)}</div>
                <button className="checkout-btn brand-btn-style">Proceed to Checkout</button>
            </div> : <button className="continue-shopping-btn brand-btn-style" onClick={() => navigate("/")}>Continue Shopping</button>}

        </div>
    )
}

export default Cart;