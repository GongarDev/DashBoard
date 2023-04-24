import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FirebaseApp } from '../../../firebase/config';
import { setMessageInput } from './';


export const saveMessage = () => {
  return async( dispatch, getState ) => {

    const FirebaseDB = getFirestore(FirebaseApp);
    const { messageInput } = getState().chat;
    const { uid, displayName, photoURL } = getState().auth;
    if(messageInput === ''){
      alert('Please enter a valid message');
      return;
    }
    await addDoc(collection(FirebaseDB, 'messages'), {
        text: messageInput,
        name: displayName,
        uid,
        photo: photoURL,
        timestamp: serverTimestamp()
    })
    dispatch( setMessageInput('') );

  }
}