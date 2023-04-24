
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../../store/dashboard/dashboardSlice';

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';


export const SideBarItem = ( { title = 'a', icon = TurnedInNot, index } ) => {

  const dispatch = useDispatch();
  const  {selectedIndex}  = useSelector( state => state.dashboard );

  const onActiveMenu = () => {
    dispatch( setActiveMenu({ index }) );
  }

  return (
    <ListItem disablePadding>
      <ListItemButton 
          selected={selectedIndex === index}
          onClick={ onActiveMenu }
      >
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