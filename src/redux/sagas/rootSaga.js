import { all, call } from "redux-saga/effects";

import addNewCategorySaga from "./addNewCategorySaga";
import addNewQuestionSaga from "./addNewQuestionSaga";
import deleteCategorySaga from "./deleteCategory";
import deleteQuestionSaga from "./deleteQuestion";

function* rootSaga() {
    yield all([
        call(addNewCategorySaga),
        call(addNewQuestionSaga),
        call(deleteCategorySaga),
        call(deleteQuestionSaga),
    ]);
}

export default rootSaga;