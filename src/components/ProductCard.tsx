import CartItem from "../models/CartItem";
import { Pieces, PiecesValues } from "../models/Pieces";
import ProductCardModel from "../models/ProductCard";
import { Quantity, QuantityValues } from "../models/Quantity";
import { StateStyle } from "../models/StateSwitchComponent";
import "../styles/components/ProductCard.css";
import StateSwitch from "./common/StateSwitch";
import { useState } from 'react';

interface ProductCardProps{
    model: ProductCardModel,
    onAddToCart: (item: CartItem) => void
}

const ProductCard = ({ model, onAddToCart }: ProductCardProps) => {
    const { name, imageUrl, description, availbaleQuantities, availablePieces, price, pricePerQuantity, isOutOfStock } = model;

    const [ quantity, setQuantity ] = useState<Quantity>();
    const [ piece, setPiece ] = useState<Pieces>();

    const addToCart = () => {
        if(quantity !== undefined && piece !== undefined){
            let item = {name, price, quantity, piece, count: 1}
            onAddToCart(item);
        }
    }

    return(
        <div className="product-card-cont">
            <img className="product-img" src={`images/${imageUrl}.png`} alt={imageUrl}/>
            <div className="product-wrap">
                <div className="product-details-cont">
                    <p className="product-name">{name}</p>
                    <p className="product-price"><span className="mrp-price">&#8377;{price}</span><span> Per </span>{QuantityValues[pricePerQuantity]}</p>
                </div>
                <div className="product-order-details-cont">
                    {availbaleQuantities && 
                        <div className="quantities-cont">
                            <label>Quantity</label>
                            <StateSwitch 
                                style={StateStyle.tab}
                                value={quantity}
                                options={availbaleQuantities.map(q => {
                                    let temp = QuantityValues[q].split(" ");
                                    return {value: q, label: `<p class="state-switch-title">${temp[0]} <br><span class="font-tiny">${temp[1]}</span></p>`}
                                })}
                                onChange={(value) => setQuantity(value)}/>
                        </div>}
                    {availablePieces && 
                        <div className="quantities-cont">
                            <label>Pieces</label>
                            <StateSwitch 
                                style={StateStyle.tab}
                                value={piece}
                                options={availablePieces.map(p => ({value: p, label: PiecesValues[p]}))}
                                onChange={(value) => setPiece(value)}/>
                        </div>}
                    {isOutOfStock ?
                        <div className="out-of-stock-info">Out Of Stock<i className="fa-solid fa-exclamation"></i></div>:
                        <button className="add-to-cart-btn" onClick={addToCart}>Add <i className="fa-solid fa-cart-shopping"></i></button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;