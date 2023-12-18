import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        type: "",
        text: "",
        isShow: false,
    },
    reducers: {
        setMessageData: (state, action) => {
            state.type = action.payload.type;
            state.text = action.payload.text;
            state.isShow = true;
        },
        clearMessageData: (state) => {
            state.type = "";
            state.text = "";
            state.isShow = false;
        },
    },
});

export const {
    setMessageData,
    clearMessageData,
} = messageSlice.actions;

export default messageSlice.reducer;