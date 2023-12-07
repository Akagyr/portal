import styled from "styled-components";

const QuestionContainer = styled.div`
    border: 2px solid #000;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    p {
        font-weight: bolder;
        font-size: 18px;
    }
`;

const QuestionText = styled.p`
    margin-bottom: 5px;
`;

const QuestionAnswer = styled.p`
    color: #4CAF50;
`;

export {
    QuestionContainer,
    QuestionText,
    QuestionAnswer,
};