import React from "react";
import { useDispatch } from "react-redux";

import { addNewCategory } from "../../redux/actions/categories/categoriesAction";
import useGetCategories from "../../hooks/useGetCategories";

import {
    Input,
    Button,
} from "../commonStyled";

const AddNewCategory = () => {
    const dispatch = useDispatch();
    const categoriesArr = useGetCategories();

    const onSubmit = (event) => {
        const isCreatedCategory = categoriesArr.find(item => item.name === event.target.categoryName.value);
        if (isCreatedCategory) {
            alert("Така категрія вже існує");
        } else {
            event.preventDefault();
            dispatch(addNewCategory({
                name: event.target.categoryName.value,
            }));
        }
        document.getElementById("form").reset();
    };

    return (
        <form id="form" onSubmit={onSubmit}>
            <Input name="categoryName" type="text" placeholder="Назва категорії" required />
            <Button type="submit">Додати категорію</Button>
        </form>
    );
};

export default AddNewCategory;