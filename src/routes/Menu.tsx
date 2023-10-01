import { useLoaderData } from "react-router-dom";
import ProductCardModel from "../models/ProductCard";
import { Quantity } from "../models/Quantity";
import ProductCard from "../components/ProductCard";
import "../styles/routes/Menu.css";

const Menu = () => {
    const data = useLoaderData() as ProductCardModel[];
    return (
        <div className="product-menu-cont">
            {data?.map(p => <ProductCard key={p.name} {...p} />)}
        </div>
    )
}

const menuLoader = async ({params}: {params: {}}) : Promise<ProductCardModel[]> => {
    return [
        {name: "Chicken Liver", isOutOfStock: false, imageUrl:"chicken-liver", description: "", price: 100, availbaleQuantities: [Quantity.Gram250, Quantity.Gram500, Quantity.KiloGram1], pricePerQuantity: Quantity.Gram250},
        {name: "Chicken Leg", isOutOfStock: false, imageUrl:"chicken-leg", description: "", price: 150, availbaleQuantities: [Quantity.Gram250, Quantity.Gram500, Quantity.KiloGram1], pricePerQuantity: Quantity.Gram500},
        {name: "Chicken Curry(Skin on)", isOutOfStock: false, imageUrl:"chicken-curry-cuts-skin-on", description: "", price: 200, availbaleQuantities: [Quantity.Gram250, Quantity.Gram500, Quantity.KiloGram1], pricePerQuantity: Quantity.Gram500},
        {name: "Chicken Curry(Skin off)", isOutOfStock: true, imageUrl:"chicken-curry-cuts-skin-off", description: "", price: 180, availbaleQuantities: [Quantity.Gram250, Quantity.Gram500, Quantity.KiloGram1], pricePerQuantity: Quantity.Gram500}
    ]
}

export { Menu as default, menuLoader};