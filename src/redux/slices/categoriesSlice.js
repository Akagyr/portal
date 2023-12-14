import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesArr: [],
        currentCategory: "",
    },
    reducers: {
        getCategoriesSuccess: (state, action) => {
            state.categoriesArr = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

export const {
    getCategoriesSuccess,
    setCurrentCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;