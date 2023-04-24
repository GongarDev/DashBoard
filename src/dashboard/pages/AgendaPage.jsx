
import { useDispatch, useSelector } from 'react-redux';
import { NoteView, NothingSelectedView } from '../components/agenda';
import { startNewNote } from "../../store/dashboard";

import { Grid, IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material';


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
