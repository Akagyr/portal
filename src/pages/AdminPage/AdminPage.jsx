import React, { useState } from "react";

import AddNewCategory from "../../components/AddNewCategory/AddNewCategory";
import AddNewQuestion from "../../components/AddNewQuestion/AddNewQuestion";
import useGetCategories from "../../hooks/useGetCategories";
import useGetQuestions from "../../hooks/useGetQuestions";
import { Select } from "../../components/commonStyled";

import {
    AdminPageContainer,
    SelectedItemContainer,
} from "./AdminPageStyled";

const AddNewElement = () => {
    const [typeAdd, setTypeAdd] = useState("");
    const categoriesArr = useGetCategories();
    const questionsArr = useGetQuestions();

    return (
        <AdminPageContainer>
            <Select onChange={e => setTypeAdd(e.target.value)}>
                <option value="">Оберіть, що потрібно додати</option>
                <option value="question">Додати питання</option>
                <option value="category">Додати категорію</option>
            </Select>
            <SelectedItemContainer>
                {typeAdd === "question" && <AddNewQuestion categoriesArr={categoriesArr} questionsArr={questionsArr} />}
                {typeAdd === "category" && <AddNewCategory categoriesArr={categoriesArr} />}
            </SelectedItemContainer>
        </AdminPageContainer>
    );
};

export default AddNewElement;