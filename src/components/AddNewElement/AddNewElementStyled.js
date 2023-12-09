import styled from "styled-components";

const AddNewElementContainer = styled.div`
    margin: 30px auto 0;
    width: 500px;
    text-align: center;

    @media (max-width: 576px) {
        width: 100%;
        margin-top: 10px;
    }
`;

const AddNewElementSwitchContainer = styled.div`
    margin-top: 50px;

    @media (max-width: 576px) {
        margin-top: 30px;
    }
`;

export {
    AddNewElementContainer,
    AddNewElementSwitchContainer,
};