import { Quantity } from "./Quantity"

interface ProductCardModel {
    name: string,
    imageUrl: string,
    description: string,
    isOutOfStock: boolean,
    price: number,
    pricePerQuantity: Quantity,
    availablePieces?: [],
    availbaleQuantities: Quantity[]
}

export { type ProductCardModel as default }
