import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        isLoading: false,
        fetchError: "",
    },
    reducers: {
        getFetchQuestions: (state) => {
            state.isLoading = true;
        },
        getSuccessQuestions: (state, action) => {
            state.questions = action.payload;
            state.isLoading = false;
        },
        getFailureQuestions: (state, action) => {
            state.fetchError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getFetchQuestions,
    getSuccessQuestions,
    getFailureQuestions,
} = questionsSlice.actions;

export default questionsSlice.reducer;