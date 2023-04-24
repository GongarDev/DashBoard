
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../components/calendar';

import { localizer, getMessagesES } from '../../helpers';
import {  useUiStore } from '../../hooks';

import { onSetActiveEvent, startLoadingEvents } from "../../store/dashboard/calendar";


export const CalendarPage = () => {

  const dispatch = useDispatch();
  const { events } = useSelector( state => state.calendar );
  const { openDateModal } = useUiStore()

  const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' );

  const eventStyleGetter = () => {

    const style = {
      backgroundColor: '#34C5B8' ,
      borderRadius: '0px',
      opacity: 0.8,
      color: '#0C1B38'
    }
    return { style }
  }

  const onDoubleClick = ( event ) => {
    openDateModal();
  }

  const onSelect = ( event ) => {
    dispatch(onSetActiveEvent( event ));
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event )
  }

  useEffect(() => {
    dispatch(startLoadingEvents())
  }, [events])

  return (
    <>

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 280px )'}}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
      
      <FabAddNew />
      <FabDelete />

    </>
  )
}
