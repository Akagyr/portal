import React, { useState } from "react";

import AddNewCategory from "../AddNewCategory/AddNewCategory";
import AddNewQuestion from "../AddNewQuestion/AddNewQuestion";

import { Select } from "../commonStyled";

import {
    AddNewElementContainer,
    AddNewElementSwitchContainer,
} from "./AddNewElementStyled";

const AddNewElement = () => {
    const [addType, setAddType] = useState("question");

    return (
        <AddNewElementContainer>
            <Select onChange={e => setAddType(e.target.value)}>
                <option value="question">Додати питання</option>
                <option value="category">Додати категорію</option>
            </Select>
            <AddNewElementSwitchContainer>
                {addType === "question"
                    ? <AddNewQuestion />
                    : <AddNewCategory />
                }
            </AddNewElementSwitchContainer>
        </AddNewElementContainer>
    );
};

export default AddNewElement;