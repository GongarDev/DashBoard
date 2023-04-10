import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/dashboard/agenda';


export const SideBarItemNote = ({ title = '', body, id, date }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date }) )
    }


    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ])

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote } >
            <ListItemIcon sx={{ color: "#31ba4f",
                        "&:hover": { color: "#ffffff" } }}>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ title } />
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
