const initialState = [];


const CART_ABO = "cart/abo"
const CART_RBO = "cart/rbo"
const CART_CLEAR = "cart/clear"
const CART_REMOVE = "cart/remove"


const cartAddByOneAction = (product) => {
    return {
        type: CART_ABO,
        product
    }
}

const cartRemoveByOneAction = (product) => {
    return {
        type: CART_RBO,
        product
    }
}

const cartClearAction = () => {
    return {
        type: CART_CLEAR
    }
}

const cartRemoveProductAction = (id) => {
    return {
        type: CART_REMOVE,
        id
    }
}

export const cartAddByOneFunction = (data) => async (dispatch) => {
    dispatch(cartAddByOneAction(data));
};

export const cartRemoveByOneFunction = (data) => async (dispatch) => {
    dispatch(cartRemoveByOneAction(data));
};

export const cartClearFunction = () => async (dispatch) => {
    dispatch(cartClearAction());
};

export const cartRemoveProductFunction = (id) => async (dispatch) => {
    dispatch(cartRemoveProductAction(id));
};




function cartReducer(state = initialState, action) {
    let newState = state;
    let found = false;
    switch (action.type) {
        case CART_ABO:
            newState.map(element => {
                if(element[0].id === action.product.id) {
                    element[1]++
                    found = true;
                }
            });
            if(found) return newState;
            newState.push([action.product, 1]);
            return newState;
        case CART_CLEAR:
            newState = [];
            return newState;
            
        case CART_REMOVE:
            newState = newState.filter(element => element[0].id !== action.id);
            return newState;
        // case CART_RBO:
        //     let index = null;
        //     newState.products.map((product, i) => {
        //         if(product.id === action.productId) {
        //             product.quantity--
        //             if(product.quantity === 0) index = i
        //         }
        //     });
        //     if(index !== null) newState.products.splice(index, 1)
        //     return newState;
        default:
            return state;
    }
}
  
export default cartReducer;