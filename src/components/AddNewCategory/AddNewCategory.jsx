import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addNewCategory } from "../../redux/actions/categories/categoriesAction";

import {
    Input,
    Button,
} from "../commonStyled";

const AddNewCategory = () => {
    const categoryRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        categoryRef.current.value !== "" ? dispatch(addNewCategory(categoryRef.current.value)) : alert("Введіть категорію!");
    };

    return (
        <>
            <Input ref={categoryRef} type="text" placeholder="Назва категорії" />
            <Button onClick={() => handleSubmit()}>Додати категорію</Button>
        </>
    );
};

export default AddNewCategory;