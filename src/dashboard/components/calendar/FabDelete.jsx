
import { useDispatch, useSelector } from 'react-redux';
import { startDeletingEvent } from "../../../store/dashboard/calendar";

import { IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

export const FabDelete = () => {

    const dispatch = useDispatch();

    const { activeEvent } = useSelector( state => state.calendar );
    const handleDelete = () => {
        dispatch(startDeletingEvent());
    }

    return (
        <IconButton
            aria-label="btn-delete"
            size='large'
            onClick={ handleDelete }
            sx={{
                display: !!activeEvent ? '': 'none',
                position: 'fixed',
                left: 315,
                bottom: 50
              }}
        >
            <DeleteOutline sx={{ fontSize: 30 }} />
        </IconButton>
    )
}
