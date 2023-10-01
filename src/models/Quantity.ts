enum  Quantity{
    Gram100,
    Gram250,
    Gram500,
    KiloGram1,
    KiloGram2
}

const QuantityValues = {
    [Quantity.Gram100]: "100 Grams",
    [Quantity.Gram250]: "250 Grams",
    [Quantity.Gram500]: "500 Grams",
    [Quantity.KiloGram1]: "1 Kg",
    [Quantity.KiloGram2]: "2 Kg"
}

export { Quantity, QuantityValues};