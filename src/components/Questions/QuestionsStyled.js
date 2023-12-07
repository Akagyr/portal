import styled from "styled-components";

const SearchContainer = styled.div`
    text-align: center;
    margin-top: 50px;

    @media (max-width: 576px) {
        margin-top: 30px;
    }
`;

const SearchInput = styled.input`
    width: 60%;
    outline: none;
    border-radius: 15px;
    padding: 10px 25px;
    font-size: 16px;

    @media (max-width: 576px) {
        width: 90%;
        padding: 8px 15px;
        font-size: 14px;
    }
`;

const QuestionsContainer = styled.div`
    width: 60%;
    margin: 30px auto 0;
    
    @media (max-width: 576px) {
        width: 90%;
        margin-top: 20px;
    }
`;

export {
    SearchContainer,
    SearchInput,
    QuestionsContainer,
};