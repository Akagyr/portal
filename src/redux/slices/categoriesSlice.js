import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesArr: [],
        fetchError: "",
        currentCategory: "",
    },
    reducers: {
        getCategoriesSuccess: (state, action) => {
            state.categoriesArr = action.payload;
        },
        getCategoriesFailure: (state, action) => {
            state.fetchError = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

export const {
    getCategoriesSuccess,
    getCategoriesFailure,
    setCurrentCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;