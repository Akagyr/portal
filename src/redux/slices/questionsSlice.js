import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questionsArr: [],
    },
    reducers: {
        getQuestionsSuccess: (state, action) => {
            state.questionsArr = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getQuestionsSuccess,
} = questionsSlice.actions;

export default questionsSlice.reducer;