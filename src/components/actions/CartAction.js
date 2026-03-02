import { ADD_PRODUCT, DELETE_PRODUCT } from "./CarActionType";

export const addProductAction = product_info => ({
    type: ADD_PRODUCT,
    payload: product_info,
});

export const deleteProductAction = product_info => ({
    type: DELETE_PRODUCT,
    payload: product_info,
});