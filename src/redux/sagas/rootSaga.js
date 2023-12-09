import { all, call } from "redux-saga/effects";

import addNewCategorySaga from "./addNewCategorySaga";
import addNewQuestionSaga from "./addNewQuestionSaga";

function* rootSaga() {
    yield all([
        call(addNewCategorySaga),
        call(addNewQuestionSaga),
    ]);
}

export default rootSaga;