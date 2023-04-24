
import { useDispatch } from 'react-redux';

import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material';

import { addHours } from 'date-fns';
import { useUiStore } from '../../../hooks';

import { onSetActiveEvent } from "../../../store/dashboard/calendar";

export const FabAddNew = () => {

    const dispatch = useDispatch();
    const { openDateModal } = useUiStore();
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }
    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Jesus'
            }
        });
        openDateModal();
    }

  return (
    <IconButton
      onClick={ handleClickNew }
      size='large'
      sx={{
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
  )
}
