import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getQuestionsSuccess } from "../redux/slices/questionsSlice";
import { setMessageData } from "../redux/slices/messageSlice";
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
            dispatch(setMessageData(error.message));
        }
    }, []);

    return questionsArr;
};

export default useGetQuestions;