import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearMessageData } from "../../redux/slices/messageSlice";

import {
    MessageContainer,
    MessageInfo,
    MessageError,
    MessageSuccess,
} from "./MessageStyled";

const Message = () => {
    const { type, text, isShow } = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isShow) { 
            const showMessagetime = setTimeout(() => {
                dispatch(clearMessageData());
            }, 4000);
            return () => clearTimeout(showMessagetime);
        }
    }, [isShow]);

    return (
        <>
            {isShow
                && <MessageContainer>
                    {type === "info" && <MessageInfo>ℹ {text}</MessageInfo>}
                    {type === "error" && <MessageError>✕ {text}</MessageError>}
                    {type === "success" && <MessageSuccess>✓ {text}</MessageSuccess>}
                </MessageContainer>
            }
        </>
    );
};

export default Message;