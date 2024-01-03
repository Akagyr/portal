import React from "react";
import { useDispatch } from "react-redux";

import { addNewQuestion } from "../../redux/actions/questions/questionsAction";
import useGetCategories from "../../hooks/useGetCategories";
import useGetQuestions from "../../hooks/useGetQuestions";
import { setMessageData } from "../../redux/slices/messageSlice";
import { findCreatedQuestion } from "../../helpers/findCreatedItemsHelper";
import {
    Input,
    Button,
    Select,
} from "../commonStyled";

const AddNewQuestion = () => {
    const categoriesArr = useGetCategories();
    const questionsArr = useGetQuestions();
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const isCreatedQuestion = findCreatedQuestion(event, questionsArr);
        if (isCreatedQuestion) {
            dispatch(setMessageData({
                type: "error",
                text: "Таке питання вже існує",
            }));
        } else {
            dispatch(addNewQuestion({
                categoryId: event.target.categoryId.value,
                text: event.target.questionText.value,
                answer: event.target.questionAnswer.value,
            }));
            dispatch(setMessageData({
                type: "success",
                text: "Питання створене!",
            }));
        }
        document.getElementById("form").reset();
    };

    const showCategoriesOptions = categoriesArr.map((category, index) => <option key={index} value={category.id}>{category.name}</option>);

    return (
        <form id="form" onSubmit={onSubmit}>
            <Select name="categoryId" required>
                <option value="">Оберіть категорію</option>
                {showCategoriesOptions}
            </Select>
            <Input name="questionText" type="text" placeholder="Текст питання" required />
            <Input name="questionAnswer" type="text" placeholder="Правильна відповідь" required />
            <Button type="submit">Додати питання</Button>
        </form>
    );
};

export default AddNewQuestion;