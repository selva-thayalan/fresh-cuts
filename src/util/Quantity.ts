import { Quantity, QuantityValues } from "../models/Quantity";

const GetQuantityElement = (quantity: Quantity) : string =>  {
    let temp = QuantityValues[quantity].split(" ");
    return `<p class="state-switch-title">${temp[0]} <br><span class="font-tiny">${temp[1]}</span></p>`;
}

export { GetQuantityElement };