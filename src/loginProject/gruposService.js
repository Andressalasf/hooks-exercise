import {
  addDoc, collection, deleteDoc, doc,
  getDocs, orderBy, query, serverTimestamp, updateDoc,
} from 'firebase/firestore';
import { db, hasFirebaseConfig } from '../firebase/firebaseConfig';

const GRUPOS_COLLECTION = 'grupos';

export const getGrupos = async () => {
  if (!hasFirebaseConfig || !db) return [];
  try {
    const snap = await getDocs(query(collection(db, GRUPOS_COLLECTION), orderBy('createdAt', 'desc')));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch {
    return [];
  }
};

export const createGrupo = async (data) => {
  if (!hasFirebaseConfig || !db) throw new Error('Firebase no disponible.');
  return addDoc(collection(db, GRUPOS_COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

export const updateGrupo = async (id, data) => {
  if (!hasFirebaseConfig || !db) throw new Error('Firebase no disponible.');
  await updateDoc(doc(db, GRUPOS_COLLECTION, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

export const deleteGrupo = async (id) => {
  if (!hasFirebaseConfig || !db) throw new Error('Firebase no disponible.');
  await deleteDoc(doc(db, GRUPOS_COLLECTION, id));
};
