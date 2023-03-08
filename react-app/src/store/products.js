const initialState = null;


const PRODUCTS_SEARCH = "products/search"


const productsSearchAction = (products) => {
    return {
        type: PRODUCTS_SEARCH,
        products
    }
}

export const productsSearchFunction = (data) => async (dispatch) => {
    const response = await fetch("/api/products/search", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    if(responseJSON.error) return responseJSON
    dispatch(productsSearchAction(responseJSON));
    return responseJSON;
};


function productsReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case PRODUCTS_SEARCH:
            newState = { ...action.products };
            return newState;
        default:
            return state;
    }
}
  
export default productsReducer;