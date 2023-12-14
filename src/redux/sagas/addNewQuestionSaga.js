import { put, takeEvery } from "redux-saga/effects";
import { setDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { questionsActionTypes } from "../actions/questions/questionsActionTypes";
import { setMessageData } from "../slices/messageSlice";

function* addNewQuestionToFirestore(action) {
    try {
        yield setDoc(doc(db, "questions", String(Date.now())), {
            text: action.payload.text,
            answer: action.payload.answer,
            categoryId: action.payload.categoryId,
        });
    } catch (error) {
        yield put(setMessageData({
            type: "error",
            text: error.message,
        }));
    }
}

function* addNewQuestionSaga() {
    yield takeEvery(questionsActionTypes.ADD_NEW_QUESTION, addNewQuestionToFirestore);
}

export default addNewQuestionSaga;