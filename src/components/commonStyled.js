import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 100%;
    border: 2px solid transparent;
    padding: 10px 15px;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;
    margin-top: 20px;

    &:first-child {
        margin-top: 0;
    }

    &:hover,
    &:focus {
        border: 2px solid #4A9DEC;
        background-color: white;
    }
`;

const Button = styled.button`
    margin-top: 25px;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    padding: 15px 25px;
    font-weight: bolder;
    cursor: pointer;

    &:hover {
        background-color: #8e2de2;
    }
`;

const Select = styled.select`
    padding: 10px 15px;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
`;

export {
    Input,
    Button,
    Select,
};