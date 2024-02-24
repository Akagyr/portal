import { put, takeEvery } from "redux-saga/effects";
import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { categoriesActionTypes } from "../actions/categories/categoriesActionTypes";
import { setMessageData } from "../slices/messageSlice";

function* deleteCategoryInFirestore(action) {
    try {
        yield deleteDoc(doc(db, "categories", action.payload));
    } catch (error) {
        yield put(setMessageData({
            type: "error",
            text: error.message,
        }));
    }
}

function* deleteCategorySaga() {
    yield takeEvery(categoriesActionTypes.DELETE_CATEGORY, deleteCategoryInFirestore);
}

export default deleteCategorySaga;