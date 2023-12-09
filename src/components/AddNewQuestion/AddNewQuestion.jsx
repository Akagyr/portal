import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { addNewQuestion } from "../../redux/actions/questions/questionsAction";
import useGetCategories from "../../hooks/useGetCategories";
import {
    Input,
    Button,
    Select,
} from "../commonStyled";

const AddNewQuestion = () => {
    const categories = useGetCategories();
    const [categoryOption, setCategoryOption] = useState("");
    const questionTextRef = useRef(null);
    const questionAnswerRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (categoryOption !== "default" && questionTextRef.current.value !== "" && questionAnswerRef.current.value !== "") {
            dispatch(addNewQuestion({
                categoryId: categoryOption,
                text: questionTextRef.current.value,
                answer: questionAnswerRef.current.value,
            }));
        } else {
            categoryOption === "default" && alert("Категорія не була обрана!");
            questionTextRef.current.value === "" && alert("Відсутнє питання!");
            questionAnswerRef.current.value === "" && alert("Відсутня відповідь на питання!");
        }
    };

    const showCategoriesOptions = categories.map((category, index) => <option key={index} value={category.id}>{category.name}</option>);

    return (
        <>
            <Select onChange={e => setCategoryOption(e.target.value)}>
                <option value="default">Оберіть категорію</option>
                {showCategoriesOptions}
            </Select>
            <Input ref={questionTextRef} type="text" placeholder="Текст питання" />
            <Input ref={questionAnswerRef} type="text" placeholder="Правильна відповідь" />
            <Button onClick={() => handleSubmit()}>Додати питання</Button>
        </>
    );
};

export default AddNewQuestion;