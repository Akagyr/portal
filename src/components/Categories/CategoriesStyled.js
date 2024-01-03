import styled from "styled-components";

const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 1.25rem;
    justify-content: space-around;

    @media (max-width: 576px) {
        display: block;
    }
`;

export {
    CategoriesContainer,
};