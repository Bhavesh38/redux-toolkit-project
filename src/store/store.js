import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";
import productReducer from "./productSlice";

const store = configureStore({
    reducer: {
        //we can add all reducers here imported from diffirent slices
        cart: cartReducer,
        product: productReducer
    }
});

export default store;