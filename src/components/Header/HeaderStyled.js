import styled from "styled-components";

const HeaderContainer = styled.div`
    padding: 10px 15px;
    background-color: #001529;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLogo = styled.h1`
    color: #fff;
`;

const HeaderAddQuestionBtn = styled.button`
    padding: 8px 15px;
    font-size: 13px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 11px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #23c483;
        color: #fff;
    }
`;

export {
    HeaderContainer,
    HeaderLogo,
    HeaderAddQuestionBtn,
};