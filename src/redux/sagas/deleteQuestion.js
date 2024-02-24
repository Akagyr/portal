import { put, takeEvery } from "redux-saga/effects";
import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { questionsActionTypes } from "../actions/questions/questionsActionTypes";
import { setMessageData } from "../slices/messageSlice";

function* deleteQuestionInFirestore(action) {
    try {
        yield deleteDoc(doc(db, "questions", action.payload));
    } catch (error) {
        yield put(setMessageData({
            type: "error",
            text: error.message,
        }));
    }
}

function* deleteQuestionSaga() {
    yield takeEvery(questionsActionTypes.DELETE_QUESTION, deleteQuestionInFirestore);
}

export default deleteQuestionSaga;