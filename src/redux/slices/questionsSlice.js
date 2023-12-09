import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questionsArr: [],
        fetchError: "",
    },
    reducers: {
        getQuestionsSuccess: (state, action) => {
            state.questionsArr = action.payload;
            state.isLoading = false;
        },
        getQuestionsFailure: (state, action) => {
            state.fetchError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getQuestionsSuccess,
    getQuestionsFailure,
} = questionsSlice.actions;

export default questionsSlice.reducer;