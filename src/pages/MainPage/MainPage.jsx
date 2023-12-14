import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Categories from "../../components/Categories/Categories";
import Questions from "../../components/Questions/Questions";
import AddNewElement from "../../components/AddNewElement/AddNewElement";
import Message from "../../components/Message/Message";

import {
    MainLayoutContainer,
} from "./MainPageStyled";

const MainLayout = () => {
    const { type, text } = useSelector(state => state.message);

    return (
        <MainLayoutContainer>
            <Message type={type} text={text} />
            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/addNewElement" element={<AddNewElement />} />
            </Routes>
        </MainLayoutContainer>
    );
};

export default MainLayout;