import styled from "styled-components";

import { Button } from "../commonStyled";

const HeaderContainer = styled.header`
    padding: 0 15px;
    height: 8vh;
    background-color: #001529;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLogo = styled.h1`
    color: #fff;
`;

const HeaderAddQuestionBtn = styled(Button)`
    padding: 8px 15px;
    font-size: 13px;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;

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