import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../../firebase/config';
import Swal from 'sweetalert2';
import { onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from './';
import { loadEvents, convertEventsToDateEvents } from '../../../helpers';


export const startNewEvent = (calendarEvent) => {
    return async( dispatch, getState ) => {
        try{
            if( calendarEvent.id ) {
                // Actualizando
                const { uid } = getState().auth;
                const { activeEvent:event } = getState().calendar;

        
                const eventToFireStore = { ...event };
                delete eventToFireStore.id;
            
                const docRef = doc( FirebaseDB, `${ uid }/calendar/events/${ event.id }` );
                await setDoc( docRef, eventToFireStore, { merge: true });
        
                dispatch( onUpdateEvent( event ) );
                return;
            } 
            
            // Creando
            const { uid } = getState().auth;

            const newEvent = {...calendarEvent}

            const newDoc = doc( collection( FirebaseDB, `${ uid }/calendar/events`) );
            await setDoc( newDoc, newEvent );

            newEvent.id = newDoc.id;  

            //! dispatch
            dispatch( onSetActiveEvent( newEvent ) );
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }
}


export const startLoadingEvents = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const  data  = await loadEvents( uid )
        const events = convertEventsToDateEvents(data);

        dispatch( onLoadEvents( events ) );
    }
}

export const startSaveEvent = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { activeEvent:event } = getState().calendar;

        const eventToFireStore = { ...event };

        delete eventToFireStore.id;
    
        const docRef = doc( FirebaseDB, `${ uid }/calendar/events/${ event.id }` );
        await setDoc( docRef, eventToFireStore, { merge: true });

        dispatch( onUpdateEvent( event ) );
    }
}

export const startDeletingEvent = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { activeEvent: event } = getState().calendar;

        const docRef = doc( FirebaseDB, `${ uid }/calendar/events/${ event.id }`);
        await deleteDoc( docRef );

        dispatch( onDeleteEvent() );
    }
}