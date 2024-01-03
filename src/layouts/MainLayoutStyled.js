import styled from "styled-components";

const MainLayoutContainer = styled.main`
    padding: 0 8%;
    position: relative;
    height: 92vh;
    
    @media (max-width: 576px) {
        padding: 20px 4% 0;
    }
`;

export {
    MainLayoutContainer,
};