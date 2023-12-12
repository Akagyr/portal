import React, { useState } from "react";

import AddNewCategory from "../AddNewCategory/AddNewCategory";
import AddNewQuestion from "../AddNewQuestion/AddNewQuestion";

import { Select } from "../commonStyled";

import {
    AddNewElementContainer,
    AddNewElementSwitchContainer,
} from "./AddNewElementStyled";

const AddNewElement = () => {
    const [addType, setAddType] = useState("");

    return (
        <AddNewElementContainer>
            <Select onChange={e => setAddType(e.target.value)}>
                <option value="">Оберіть, що потрібно додати</option>
                <option value="question">Додати питання</option>
                <option value="category">Додати категорію</option>
            </Select>
            <AddNewElementSwitchContainer>
                {addType === "question" && <AddNewQuestion />}
                {addType === "category" && <AddNewCategory />}
            </AddNewElementSwitchContainer>
        </AddNewElementContainer>
    );
};

export default AddNewElement;