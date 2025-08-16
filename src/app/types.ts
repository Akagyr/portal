export type Category = {
  id: string;
  name: string;
  subcategoriesId?: string[];
  testsId?: string[];
};

export type Subcategory = {
  id: string;
  name: string;
  testsId: string[];
};

export type Test = {
  id: string;
  name: string;
  questionsId: string;
};

export type Question = {
  id: string;
  text: string;
  answers: string[];
  correctAnswer: string;
  testsId: string;
};
