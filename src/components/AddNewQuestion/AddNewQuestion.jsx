import React from "react";
import { useDispatch } from "react-redux";

import { addNewQuestion } from "../../redux/actions/questions/questionsAction";
import useGetCategories from "../../hooks/useGetCategories";
import useGetQuestions from "../../hooks/useGetQuestions";
import { setMessageData } from "../../redux/slices/messageSlice";
import {
    Input,
    Button,
    Select,
} from "../commonStyled";

const AddNewQuestion = () => {
    const categoriesArr = useGetCategories();
    const questionsArr = useGetQuestions();
    const dispatch = useDispatch();

    const findCreatedQuestion = (event) => {
        let find = false;
        
        questionsArr.forEach(element => {
            const isCreatedCategory = element.categoryId === event.target.categoryId.value;
            const isCreatedQuestionText = element.text === event.target.questionText.value;
            const isCreatedQuestionAnswer = element.answer === event.target.questionAnswer.value;

            if (isCreatedCategory) {
                if (isCreatedQuestionText) {
                    if (isCreatedQuestionAnswer) {
                        return find = true;
                    }
                }
            }
        });
        return find;
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const isCreatedQuestion = findCreatedQuestion(event);
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