import { db } from '@/utils/authentication/firebase'
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore"

export async function addDocument(collectionName: string, item: ImageItem) {
  return await addDoc(collection(db, collectionName), item);
}

export async function getDocuments(collectionName: string) {
  return await getDocs(collection(db, collectionName));
}

export async function getDocument(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  return await getDoc(docRef);
}


