import styled from "styled-components";

import { Button } from "../commonStyled";

const QuestionsListContainer = styled.div`
    text-align: left;
    margin-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 576px) {
        width: 100%;
        margin-top: 30px;
    }
`;

const QuestionsListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
`;

const ItemContent = styled.div`
    margin: 0 10px;
`;

const ItemText = styled.p`
    margin-bottom: 10px;
`;

const ItemAnswer = styled.p`
    color: green;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpdateButton = styled(Button)`
    padding: 10px;
    background-color: #2563EB;
    margin-bottom: 5px;
`;

const DeleteButton = styled(Button)`
    padding: 10px;
    background-color: #DC2626;
`;

export {
    QuestionsListContainer,
    QuestionsListItemContainer,
    ItemContent,
    ItemText,
    ItemAnswer,
    ButtonGroup,
    UpdateButton,
    DeleteButton,
};