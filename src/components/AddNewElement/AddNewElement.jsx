import React, { useState } from "react";

import AddNewCategory from "../AddNewCategory/AddNewCategory";
import AddNewQuestion from "../AddNewQuestion/AddNewQuestion";

import {
    SelectAddNewElement,
} from "./AddNewElementStyled";

const AddNewElement = () => {
    const [addType, setAddType] = useState("question");

    return (
        <>
            <SelectAddNewElement onChange={e => setAddType(e.target.value)}>
                <option value="question">Question</option>
                <option value="category">Category</option>
            </SelectAddNewElement>
            {addType === "question"
                ? <AddNewQuestion />
                : <AddNewCategory />
            }
        </>
    );
};

export default AddNewElement;