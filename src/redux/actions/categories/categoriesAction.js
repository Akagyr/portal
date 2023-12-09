import { categoriesActionTypes} from "./categoriesActionTypes";

export const addNewCategory = (newCategory) => {
    return {
        type: categoriesActionTypes.ADD_NEW_CATEGORY,
        payload: newCategory,
    };
};