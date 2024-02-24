import { categoriesActionTypes} from "./categoriesActionTypes";

export const addNewCategory = (newCategory) => {
    return {
        type: categoriesActionTypes.ADD_NEW_CATEGORY,
        payload: newCategory,
    };
};

export const updateCategory = (category) => {
    return {
        type: categoriesActionTypes.UPDATE_CATEGORY,
        payload: category,
    };
};

export const deleteCategory = (categoryId) => {
    return {
        type: categoriesActionTypes.DELETE_CATEGORY,
        payload: categoryId,
    };
};