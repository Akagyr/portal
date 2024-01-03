import styled from "styled-components";

const NotFoundPageContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
`;

const NotFoundPageTitle = styled.h1`
    font-size: 80px;
`;

const NotFoundPageSubTitle = styled.h2`
    font-size: 28px;
`;

const NotFoundPageText = styled.p`
    font-size: 17px;
    margin-top: 10px;
`;

export {
    NotFoundPageContainer,
    NotFoundPageTitle,
    NotFoundPageSubTitle,
    NotFoundPageText,
};