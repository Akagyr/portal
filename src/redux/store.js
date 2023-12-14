import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import categoriesReducer from "./slices/categoriesSlice";
import questionsReducer from "./slices/questionsSlice";
import messageReducer from "./slices/messageSlice";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        questions: questionsReducer,
        message: messageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);