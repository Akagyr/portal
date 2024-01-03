import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesArr: [],
        currentCategory: "",
        isLoading: false,
    },
    reducers: {
        getCategoriesFetch: (state) => {
            state.isLoading = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.categoriesArr = action.payload;
            state.isLoading = false;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

export const {
    getCategoriesFetch,
    getCategoriesSuccess,
    setCurrentCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;