import React from "react";

import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import RoutesHelper from "../components/RoutesHelper";
import Loader from "../components/Loader/Loader";

import {
    MainLayoutContainer,
} from "./MainLayoutStyled";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Message />
            <Loader />
            <MainLayoutContainer>
                <RoutesHelper />
            </MainLayoutContainer>
        </>
    );
};

export default MainLayout;