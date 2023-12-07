import React from "react";

import {
    QuestionContainer,
    QuestionText,
    QuestionAnswer,
} from "./QuestionStyled";

const Question = ({question}) => {
    return (
        <QuestionContainer>
            <QuestionText>{question.text}</QuestionText>
            <QuestionAnswer>{question.answer}</QuestionAnswer>
        </QuestionContainer>
    );
};

export default Question;