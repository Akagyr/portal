import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Category, Question, Subcategory, Test } from '../types';

export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, 'categories'));
  const categories = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Category)
  );
  return categories;
}

export async function getSubcategories() {
  const querySnapshot = await getDocs(collection(db, 'subcategories'));
  const subcategories = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Subcategory)
  );
  return subcategories;
}

export async function getSubcategoriesById(subcategoriesId: string) {
  const querySnapshot = await getDocs(collection(db, subcategoriesId));
  const subcategories = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Subcategory)
  );
  return subcategories;
}

export async function getTests() {
  const querySnapshot = await getDocs(collection(db, 'tests'));
  const tests = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Test)
  );
  return tests;
}

export async function getTestsById(testsId: string) {
  const querySnapshot = await getDocs(collection(db, testsId));
  const tests = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Test)
  );
  return tests;
}

export async function getQuestionsByTestId(testsId: string) {
  const q = query(
    collection(db, 'questions'),
    where('testsId', '==', testsId)
  );

  const querySnapshot = await getDocs(q);

  const questions = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Question)
  );

  return questions;
}