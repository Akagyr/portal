import React from "react";
import { Outlet } from "react-router-dom";

import { MainPageContainer } from "./MainPageStyled";

const MainPage = () => {
    return (
        <MainPageContainer>
            <Outlet />
        </MainPageContainer>
    );
};

export default MainPage;