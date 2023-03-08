const initialState = null;


const PRODUCT_ID = "product/id"


const productIdAction = (product) => {
    return {
        type: PRODUCT_ID,
        product
    }
}

export const productIdFunction = (data) => async (dispatch) => {
    const response = await fetch(`/api/products/${data}`);
    const responseJSON = await response.json();
    if(responseJSON.error) return responseJSON
    dispatch(productIdAction(responseJSON));
    return responseJSON;
};


function productReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case PRODUCT_ID:
            newState = { ...action.product };
            return newState;
        default:
            return state;
    }
}
  
export default productReducer;