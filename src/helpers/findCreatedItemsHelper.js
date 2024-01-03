export const findCreatedCategory = (event, categoriesArr) => {
    let find = false;
    const isCreatedCategory = categoriesArr.find(item => item.name === event.target.categoryName.value);

    if (isCreatedCategory) {
        return find = true;
    }
    return find;
};

export const findCreatedQuestion = (event, questionsArr) => {
    let find = false;
    
    questionsArr.forEach(element => {
        const isCreatedCategory = element.categoryId === event.target.categoryId.value;
        const isCreatedQuestionText = element.text === event.target.questionText.value;
        const isCreatedQuestionAnswer = element.answer === event.target.questionAnswer.value;

        if (isCreatedCategory) {
            if (isCreatedQuestionText) {
                if (isCreatedQuestionAnswer) {
                    return find = true;
                }
            }
        }
    });
    return find;
};