import React from "react";

import {
    NotFoundPageContainer,
    NotFoundPageTitle,
    NotFoundPageSubTitle,
    NotFoundPageText,
} from "./NotFoundPageStyled";

const NotFoundPage = () => {
    return (
        <NotFoundPageContainer>
            <NotFoundPageTitle>404</NotFoundPageTitle>
            <NotFoundPageSubTitle>Page not found</NotFoundPageSubTitle>
            <NotFoundPageText>The resource requestbled could not be found on this server!</NotFoundPageText>
        </NotFoundPageContainer>
    );
};

export default NotFoundPage;