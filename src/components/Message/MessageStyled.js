import styled from "styled-components";

const MessageContainer = styled.div`
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px 10px;
    position: absolute;
    z-index: 100;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
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