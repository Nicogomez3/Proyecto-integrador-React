import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        selectedCategory: 'Todo',
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;