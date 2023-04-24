
import { useDispatch } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/dashboard/agenda';


export const SideBarItemNote = ({ title = '', body, id, date }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date }) )
    }

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }  >
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText  
                    primary={ title } 
                    primaryTypographyProps={{
                        style:{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            // color: '#0009',
                            fontSize: '0.875rem',
                            maxWidth: '85%',               
                        }
                    }}
                />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
