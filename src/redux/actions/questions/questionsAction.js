import { questionsActionTypes} from "./questionsActionTypes";

export const addNewQuestion = (newQuestion) => {
    return {
        type: questionsActionTypes.ADD_NEW_QUESTION,
        payload: newQuestion,
    };
};

export const updateQuestion = (question) => {
    return {
        type: questionsActionTypes.UPDATE_QUESTION,
        payload: question,
    };
};

export const deleteQuestion = (questionId) => {
    return {
        type: questionsActionTypes.DELETE_QUESTION,
        payload: questionId,
    };
};