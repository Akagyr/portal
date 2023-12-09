import { questionsActionTypes} from "./questionsActionTypes";

export const addNewQuestion = (newQuestion) => {
    return {
        type: questionsActionTypes.ADD_NEW_QUESTION,
        payload: newQuestion,
    };
};