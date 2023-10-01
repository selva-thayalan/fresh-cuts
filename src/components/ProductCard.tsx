import ProductCardModel from "../models/ProductCard";
import { QuantityValues } from "../models/Quantity";
import "../styles/components/ProductCard.css";

interface ProductCardProps extends ProductCardModel{

}

const ProductCard = ({ name, imageUrl, description, availbaleQuantities, price, pricePerQuantity, isOutOfStock }: ProductCardProps) => {

    return(
        <div className="product-card-cont">
            <img className="product-img" src={`images/${imageUrl}.png`} alt={imageUrl}/>
            <div className="product-wrap">
                <div className="product-details-cont">
                    <p className="product-name">{name}</p>
                    <p className="product-price"><span className="mrp-price">&#8377;{price}</span><span> per </span>{QuantityValues[pricePerQuantity]}</p>
                </div>
                <div className="product-order-details-cont">
                    {availbaleQuantities && 
                        <div className="quantities-cont">
                            <label>Quantity</label>
                        </div>}
                    {isOutOfStock ?
                        <div className="out-of-stock-info">Out Of Stock</div>:
                        <button className="add-to-cart-btn">Add to cart</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;