import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, hasFirebaseConfig } from '../firebase/firebaseConfig';

const USERS_COLLECTION = 'usuarios_registrados';

const normalizeString = (value = '') => value.trim();

export const registerUserInFirestore = async (formData) => {
  if (!hasFirebaseConfig || !db || !auth) {
    throw new Error('La configuracion del proyecto no es valida.');
  }

  const email = normalizeString(formData.email).toLowerCase();
  const password = formData.password;

  let firebaseUser;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    firebaseUser = userCredential.user;
  } catch (error) {
    if (error?.code === 'auth/email-already-in-use') {
      throw new Error('El correo electronico ya esta registrado.');
    }

    if (error?.code === 'auth/invalid-email') {
      throw new Error('El correo electronico no tiene un formato valido.');
    }

    if (error?.code === 'auth/weak-password') {
      throw new Error('La contrasena es muy debil. Usa al menos 6 caracteres.');
    }

    throw new Error('No se pudo crear la cuenta.');
  }

  const payload = {
    uid: firebaseUser.uid,
    nombre: normalizeString(formData.nombre),
    apellido: normalizeString(formData.apellido),
    codigo: normalizeString(formData.codigo),
    email,
    createdAt: serverTimestamp(),
  };

  try {
    await setDoc(doc(db, USERS_COLLECTION, firebaseUser.uid), payload);
  } catch (error) {
    if (error?.code === 'permission-denied') {
      throw new Error('No tienes permisos para completar el registro.');
    }

    throw new Error('No se pudo guardar la informacion del usuario.');
  }

  return {
    id: firebaseUser.uid,
    ...payload,
  };
};

export const googleUserExistsInFirestore = async (uid) => {
  if (!hasFirebaseConfig || !db) return false;
  const snap = await getDoc(doc(db, USERS_COLLECTION, uid));
  return snap.exists();
};

export const saveGoogleUserToFirestore = async ({ uid, email, nombre, apellido, codigo }) => {
  if (!hasFirebaseConfig || !db) {
    throw new Error('La configuracion del proyecto no es valida.');
  }

  const payload = {
    uid,
    nombre: normalizeString(nombre),
    apellido: normalizeString(apellido),
    codigo: normalizeString(codigo),
    email,
    createdAt: serverTimestamp(),
  };

  try {
    await setDoc(doc(db, USERS_COLLECTION, uid), payload);
  } catch (error) {
    if (error?.code === 'permission-denied') {
      throw new Error('No tienes permisos para completar el registro.');
    }
    throw new Error('No se pudo guardar la informacion del usuario.');
  }

  return { id: uid, ...payload };
};
