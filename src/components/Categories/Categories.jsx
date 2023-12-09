import React from "react";

import useGetCategories from "../../hooks/useGetCategories";
import Category from "../Category/Category";

import {
    CategoriesContainer,
} from "./CategoriesStyled";

const Categories = () => {
    const categoriesArr = useGetCategories();

    const showCategories = categoriesArr.map((category, index) => <Category key={index} category={category} />);

    return (
        <CategoriesContainer>
            {showCategories}
        </CategoriesContainer>

        
    );
};

export default Categories;