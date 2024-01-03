import styled from "styled-components";

const CategoryContainer = styled.div`
    width: 100%;
    height: 250px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(7px);
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    border-radius: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    color: black;
    transition: ease 0.5s;
    cursor: pointer;

    &:hover {
        transform: translateY(-0.4rem);
    }

    @media (max-width: 576px) and (hover: hover) {
        &:hover {
            transform: none;
            background-color: rgb(55, 60, 64);
        }
    }

    @media (max-width: 576px) {
        width: 100%;
        height: 100%;
        padding: 40px 10px;
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export {
    CategoryContainer,
};