import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/CarActionType";

const INITAL_STATE = {
    cart: [],
};

const CartReducer = (state = INITAL_STATE, action) => {
    const {cart} = state;
    let product_info, newState;

    switch (action.type) {
        case ADD_PRODUCT:
            product_info = action.payload;
            newState = {
                cart: [...cart, product_info],
            };
            return newState;
        
        case DELETE_PRODUCT:
            product_info = action.payload
            cart.splice(cart.indexOf(product_info), 1);
            newState = {
                cart: [...cart],
            };
            return newState;

        default:
            return state;
    }
}

export default CartReducer;