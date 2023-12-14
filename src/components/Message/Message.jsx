import React from "react";

import {
    MessageContainer,
    MessageInfo,
    MessageError,
    MessageSuccess,
} from "./MessageStyled";

const Message = (type, text) => {
    return (
        <>
            {type && text
                &&<MessageContainer>
                    {type === "info" && <MessageInfo>ℹ {text}</MessageInfo>}
                    {type === "error" && <MessageError>✕ {text}</MessageError>}
                    {type === "success" && <MessageSuccess>✓ {text}</MessageSuccess>}
                </MessageContainer>
            }
        </>
    );
};

export default Message;