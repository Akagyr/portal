import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getQuestionsSuccess, getQuestionsFailure } from "../redux/slices/questionsSlice";
import { db } from "../firebase";

const useGetQuestions = () => {
    const { questionsArr } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const queryCollection = collection(db, "questions");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempArr = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                });
                dispatch(getQuestionsSuccess(tempArr));
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(getQuestionsFailure(error));
        }
    }, []);

    return questionsArr;
};

export default useGetQuestions;