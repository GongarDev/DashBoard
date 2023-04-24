
import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';


export const loadEvents = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/calendar/events` );
    const docs = await getDocs(collectionRef);

    const events = [];
    docs.forEach( doc => {
        events.push({ id: doc.id, ...doc.data() });
    });
    
    return events;
}