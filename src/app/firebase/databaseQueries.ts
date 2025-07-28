import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Category, Question, Subcategory, Test } from '../types';

export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, 'categories'));
  const categories = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Category)
  );
  return categories;
}

export async function getSubcategoriesById(subcategoriesId: string) {
  const querySnapshot = await getDocs(collection(db, subcategoriesId));
  const subcategories = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Subcategory)
  );
  return subcategories;
}

export async function getTestsById(testsId: string) {
  const querySnapshot = await getDocs(collection(db, testsId));
  const tests = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Test)
  );
  return tests;
}

export async function getQuestionsById(questionsId: string) {
  const querySnapshot = await getDocs(collection(db, questionsId));
  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        ...doc.data(),
      } as Question)
  );
  return questions;
}