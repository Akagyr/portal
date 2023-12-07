import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getFetchCategories, getSuccessCategories, getFailureCategories } from "../redux/slices/categoriesSlice";
import { db } from "../firebase";

const useGetCategories = () => {
    const { categories } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(getFetchCategories());
            const queryCollection = collection(db, "categories");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempArr = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                });
                dispatch(getSuccessCategories(tempArr));
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(getFailureCategories(error));
        }
    }, []);

    return categories;
};

export default useGetCategories;