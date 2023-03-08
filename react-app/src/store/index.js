import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import productsReducer from './products';
import productReducer from './product';
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
    }
});

export default store;