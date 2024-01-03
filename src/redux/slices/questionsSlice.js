import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questionsArr: [],
        isLoading: false,
    },
    reducers: {
        getQuestionsFetch: (state) => {
            state.isLoading = true;
        },
        getQuestionsSuccess: (state, action) => {
            state.questionsArr = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getQuestionsFetch,
    getQuestionsSuccess,
} = questionsSlice.actions;

export default questionsSlice.reducer;