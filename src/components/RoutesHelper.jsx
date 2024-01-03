import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import Categories from "./Categories/Categories";
import Questions from "./Questions/Questions";

const RoutesHelper = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<Categories />} />
                <Route path="/:categoryId/questions" element={<Questions />} />
            </Route>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default RoutesHelper;
