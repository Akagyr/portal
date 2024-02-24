import React from "react";
import { useDispatch } from "react-redux";

import { addNewCategory, deleteCategory } from "../../redux/actions/categories/categoriesAction";
import { setMessageData } from "../../redux/slices/messageSlice";
import { findCreatedCategory } from "../../helpers/findCreatedItemsHelper";
import {
    Input,
    Button,
} from "../commonStyled";

import {
    CategoriesListContainer,
    CategoriesListItemContainer,
    ItemContent,
    ButtonGroup,
    UpdateButton,
    DeleteButton,
} from "./AddNewCategoryStyled";

const AddNewCategory = ({ categoriesArr }) => {
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const isCreatedCategory = findCreatedCategory(event, categoriesArr);
        if (isCreatedCategory) {
            dispatch(setMessageData({
                type: "error",
                text: "Така категрія вже існує",
            }));
        } else {
            dispatch(addNewCategory(event.target.categoryName.value));
            dispatch(setMessageData({
                type: "success",
                text: "Категорія створена!",
            }));
        }
        document.getElementById("form").reset();
    };

    return (
        <>
            <form id="form" onSubmit={onSubmit}>
                <Input name="categoryName" type="text" placeholder="Назва категорії" required />
                <Button type="submit">Додати категорію</Button>
            </form>
            <CategoriesListContainer>
                {categoriesArr.map((el, index) =>
                    <CategoriesListItemContainer key={el.id}>
                        <p>{index + 1}.</p>
                        <ItemContent>{el.name}</ItemContent>
                        <ButtonGroup>
                            <UpdateButton>Змінити</UpdateButton>
                            <DeleteButton onClick={() => dispatch(deleteCategory(el.id))}>Видалити</DeleteButton>
                        </ButtonGroup>
                    </CategoriesListItemContainer>
                )}
            </CategoriesListContainer>
        </>
    );
};

export default AddNewCategory;