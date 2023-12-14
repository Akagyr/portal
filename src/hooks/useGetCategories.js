import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getCategoriesSuccess } from "../redux/slices/categoriesSlice";
import { setMessageData } from "../redux/slices/messageSlice";
import { db } from "../firebase";

const useGetCategories = () => {
    const { categoriesArr } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const queryCollection = collection(db, "categories");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempArr = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                });
                dispatch(getCategoriesSuccess(tempArr));
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(setMessageData(error.message));
        }
    }, []);

    return categoriesArr;
};

export default useGetCategories;