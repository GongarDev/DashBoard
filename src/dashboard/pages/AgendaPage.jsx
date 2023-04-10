import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from "../../store/dashboard";

export const AgendaPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.agenda );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
    >

      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      

    </Grid>
  )
}
