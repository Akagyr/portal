import React, { useState } from "react";
import { useSelector } from "react-redux";

import useGetQuestions from "../../hooks/useGetQuestions";
import Question from "../Question/Question";

import {
    SearchContainer,
    SearchInput,
    QuestionsContainer,
} from "./QuestionsStyled";

const Questions = () => {
    const { currentCategory } = useSelector(state => state.categories);
    const questionsArr = useGetQuestions().filter(el => el.categoryId === currentCategory);
    const [filterValue, setFilterValue] = useState("");

    const showQuestions = questionsArr
        .filter(question => question.text.toLowerCase().includes((filterValue).toLowerCase()))
        .map((question, index) => <Question key={index} question={question} />);

    return (
        <>
            <SearchContainer>
                <SearchInput onChange={e => setFilterValue(e.target.value)} type="text" placeholder="Пошук..." />
            </SearchContainer>
            <QuestionsContainer>
                {showQuestions}
            </QuestionsContainer>
        </>
    );
};

export default Questions;