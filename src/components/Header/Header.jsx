import React from "react";
import { Link } from "react-router-dom";

import {
    HeaderContainer,
    HeaderLogo,
    HeaderAddQuestionBtn,
} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <Link to="/">Portal</Link>
            </HeaderLogo>
            <HeaderAddQuestionBtn>
                <Link to="/addNewElement">Додати питання/категорію</Link>
            </HeaderAddQuestionBtn>
        </HeaderContainer>
    );
};

export default Header;