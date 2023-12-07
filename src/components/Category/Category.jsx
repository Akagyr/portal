import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentCategory } from "../../redux/slices/categoriesSlice";

import {
    CategoryContainer
} from "./CategoryStyled";

const Category = ({ category }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectCategory = (categoryId) => {
        dispatch(setCurrentCategory(categoryId));
        navigate("/questions");
    };

    return (
        <CategoryContainer onClick={() => selectCategory(category.id)}>
            {category.name}
        </CategoryContainer>
    );
};


export default Category;