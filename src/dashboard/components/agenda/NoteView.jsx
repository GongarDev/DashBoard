import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../../hooks/useForm';
import { setActiveNote, startDeletingNote, startSaveNote } from '../../../store/dashboard/agenda';


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.agenda );

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])

    useEffect(() => {
      if ( messageSaved.length > 0 ) {
          Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
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
    <Grid item>
        <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
    </Grid>
    <Grid item>

        <Button 
            disabled={ isSaving }
            onClick={ onSaveNote }
            color="primary" 
            sx={{ padding: 1 }}
        >
            <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
            Guardar
        </Button>
    </Grid>

    <Grid container>
        <TextField 
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: 'none', mb: 1, mt: 1 }}
            name="title"
            value={ title }
            onChange={ onInputChange }
        />

        <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió en el día de hoy?"
            minRows={ 5 }
            name="body"
            value={ body }
            onChange={ onInputChange }
        />
    </Grid>

    <Grid container justifyContent='end'>
        <Button
            onClick={ onDelete }
            sx={{ mt: 2 }}
            color="error"
        >
            <DeleteOutline />
            Borrar
        </Button>
    </Grid>

</Grid>
  )
}