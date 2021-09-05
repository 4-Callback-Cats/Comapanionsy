import 'firebase/compat/firestore';
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
