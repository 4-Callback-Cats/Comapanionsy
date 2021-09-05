import 'firebase/compat/firestore';
import { collection, getDocs } from 'firebase/firestore';
import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};
export const updateProfile = (uid, data) => {
  return firestore
    .collection('form')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const getAllProfiles = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'form'));
  const formList = await querySnapshot.docs.map((doc) => doc.data());
  return formList;
};
