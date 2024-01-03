import styled from "styled-components";

const MessageContainer = styled.div`
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 25px;
    position: absolute;
    z-index: 100;
    margin-top: 10px;
    left: 50%;
    transform: translate(-50%);
    font-weight: 600;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.35);
`;

const MessageInfo = styled.p`
    color: blue;
`;

const MessageError = styled.p`
    color: red;
`;

const MessageSuccess = styled.p`
    color: green;
`;

export {
    MessageContainer,
    MessageInfo,
    MessageError,
    MessageSuccess,
};