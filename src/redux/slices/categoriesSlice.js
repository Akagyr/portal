import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        isLoading: false,
        fetchError: "",
        currentCategory: "",
    },
    reducers: {
        getFetchCategories: (state) => {
            state.isLoading = true;
        },
        getSuccessCategories: (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        },
        getFailureCategories: (state, action) => {
            state.fetchError = action.payload;
            state.isLoading = false;
        },
        setCurrentCategory: (state, action) => {
            state.isLoading = true;
            state.currentCategory = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getFetchCategories,
    getSuccessCategories,
    getFailureCategories,
    setCurrentCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;