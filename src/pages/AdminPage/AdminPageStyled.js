import styled from "styled-components";

const AdminPageContainer = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    width: 500px;
    text-align: center;

    @media (max-width: 576px) {
        width: 100%;
        margin-top: 10px;
    }
`;

const SelectedItemContainer = styled.div`
    margin-top: 50px;

    @media (max-width: 576px) {
        margin-top: 30px;
    }
`;

export {
    AdminPageContainer,
    SelectedItemContainer,
};