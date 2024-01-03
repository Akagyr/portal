import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
    DotsContainer,
    Dot,
} from "./LoaderStyled";

const Loader = () => {
    const [isShow, setIsShow] = useState(false);
    const categoriesIsLoading = useSelector(state => state.categories).isLoading;
    const questionsIsLoading = useSelector(state => state.questions).isLoading;

    useEffect(() => {
        if (categoriesIsLoading || questionsIsLoading) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }, [categoriesIsLoading, questionsIsLoading]);

    return (
        <>
            {isShow &&
                <DotsContainer>
                    <Dot />
                    <Dot />
                    <Dot />
                    <Dot />
                    <Dot />
                </DotsContainer>
            }
        </>
    );
};

export default Loader;