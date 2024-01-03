import React, { useState } from "react";

import AddNewCategory from "../../components/AddNewCategory/AddNewCategory";
import AddNewQuestion from "../../components/AddNewQuestion/AddNewQuestion";

import { Select } from "../../components/commonStyled";

import {
    AdminPageContainer,
    SelectedItemContainer,
} from "./AdminPageStyled";

const AddNewElement = () => {
    const [typeAdd, setTypeAdd] = useState("");

    return (
        <AdminPageContainer>
            <Select onChange={e => setTypeAdd(e.target.value)}>
                <option value="">Оберіть, що потрібно додати</option>
                <option value="question">Додати питання</option>
                <option value="category">Додати категорію</option>
            </Select>
            <SelectedItemContainer>
                {typeAdd === "question" && <AddNewQuestion />}
                {typeAdd === "category" && <AddNewCategory />}
            </SelectedItemContainer>
        </AdminPageContainer>
    );
};

export default AddNewElement;