import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewQuestion, deleteQuestion } from "../../redux/actions/questions/questionsAction";
import { setMessageData } from "../../redux/slices/messageSlice";
import { findCreatedQuestion } from "../../helpers/findCreatedItemsHelper";
import {
    Input,
    Button,
    Select,
} from "../commonStyled";

import {
    QuestionsListContainer,
    QuestionsListItemContainer,
    ItemContent,
    ItemText,
    ItemAnswer,
    ButtonGroup,
    UpdateButton,
    DeleteButton,
} from "./AddNewQuestionStyled";

const AddNewQuestion = ({ categoriesArr, questionsArr }) => {
    const [categoryId, setCategoryId] = useState(null);
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
        <>
            <form id="form" onSubmit={onSubmit}>
                <Select name="categoryId" onChange={(e) => setCategoryId(e.target.value)} required>
                    <option value="">Оберіть категорію</option>
                    {showCategoriesOptions}
                </Select>
                <Input name="questionText" type="text" placeholder="Текст питання" required />
                <Input name="questionAnswer" type="text" placeholder="Правильна відповідь" required />
                <Button type="submit">Додати питання</Button>
            </form>
            <QuestionsListContainer>
                {questionsArr.filter(el => el.categoryId === categoryId).map((el, index) =>
                    <QuestionsListItemContainer key={el.id}>
                        <p>{index + 1}.</p>
                        <ItemContent>
                            <ItemText>{el.text}</ItemText>
                            <ItemAnswer>{el.answer}</ItemAnswer>
                        </ItemContent>
                        <ButtonGroup>
                            <UpdateButton>Змінити</UpdateButton>
                            <DeleteButton onClick={() => dispatch(deleteQuestion(el.id))}>Видалити</DeleteButton>
                        </ButtonGroup>
                    </QuestionsListItemContainer>
                )}
            </QuestionsListContainer>
        </>
    );
};

export default AddNewQuestion;