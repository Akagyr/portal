import React from "react";

import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import RoutesHelper from "../components/RoutesHelper";

import {
    MainLayoutContainer,
} from "./MainLayoutStyled";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Message />
            <MainLayoutContainer>
                <RoutesHelper />
            </MainLayoutContainer>
        </>
    );
};

export default MainLayout;