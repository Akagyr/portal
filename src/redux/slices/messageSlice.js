import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        type: "",
        text: "",
    },
    reducers: {
        setMessageData: (state, action) => {
            state.type = action.payload.type;
            state.text = action.payload.text;
        },
    },
});

export const {
    setMessageData,
} = messageSlice.actions;

export default messageSlice.reducer;