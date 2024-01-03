import React from "react";
import { useDispatch } from "react-redux";

import { addNewCategory } from "../../redux/actions/categories/categoriesAction";
import useGetCategories from "../../hooks/useGetCategories";
import { setMessageData } from "../../redux/slices/messageSlice";
import { findCreatedCategory } from "../../helpers/findCreatedItemsHelper";
import {
    Input,
    Button,
} from "../commonStyled";

const AddNewCategory = () => {
    const dispatch = useDispatch();
    const categoriesArr = useGetCategories();

    const onSubmit = (event) => {
        event.preventDefault();
        const isCreatedCategory = findCreatedCategory(event, categoriesArr);
        if (isCreatedCategory) {
            dispatch(setMessageData({
                type: "error",
                text: "Така категрія вже існує",
            }));
        } else {
            dispatch(addNewCategory({
                name: event.target.categoryName.value,
            }));
            dispatch(setMessageData({
                type: "success",
                text: "Категорія створена!",
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