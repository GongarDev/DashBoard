
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';

export const SideBarItem = ( { title = 'a', icon = TurnedInNot} ) => {

    const onClickNote = () => {

    }

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }>
            <ListItemIcon>
               { icon ? icon : ''}
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ title } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}