import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isOpen: false,
        items: [],
    },
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
        addItemToCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1});
            }
        },

        incrementItemQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
       decrementItemQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },

    },
});

export const { toggleCart, addItemToCart, incrementItemQuantity, decrementItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;