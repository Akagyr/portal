import { put, takeEvery } from "redux-saga/effects";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { categoriesActionTypes } from "../actions/categories/categoriesActionTypes";
import { setMessageData } from "../slices/messageSlice";

function* addNewCategoryToFirestore(action) {
    try {
        yield setDoc(doc(db, "categories", String(Date.now())), {
            name: action.payload,
        });
    } catch (error) {
        yield put(setMessageData({
            type: "error",
            text: error.message,
        }));
    }
}

function* addNewCategorySaga() {
    yield takeEvery(categoriesActionTypes.ADD_NEW_CATEGORY, addNewCategoryToFirestore);
}

export default addNewCategorySaga;