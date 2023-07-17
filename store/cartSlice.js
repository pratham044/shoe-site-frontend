//This file cartSlice is your reducer ( how to do)
import { createSlice } from '@reduxjs/toolkit'

//since we can have only one Root reducer ... therefore .. we created all inside createSlice
export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems : []
    },

    reducers:{
       addToCart : (state,action) => {

        const item = state.cartItems.find( (p) => p.id === action.payload.id );
        if( item ){
            item.quantity++ ;
            item.attributes.price =  item.oneQuantityPrice * item.quantity ;
        }else{
            state.cartItems.push({...action.payload , quantity: 1});
        }
    },

    updateCart: (state, action) => {
        
        state.cartItems = state.cartItems.map((p) => {
            if (p.id === action.payload.id) {
                if (action.payload.key === "quantity") {
                    p.attributes.price =
                        p.oneQuantityPrice * action.payload.val;
                }
                return { ...p, [action.payload.key]: action.payload.val };
            }
            return p;
        });
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            (p) => p.id !== action.payload.id
        );

    },
}})

export const{ addToCart , updateCart , removeFromCart } = cartSlice.actions ;
export default cartSlice.reducer