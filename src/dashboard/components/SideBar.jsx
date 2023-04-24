
import { useSelector } from 'react-redux';
import { SideBarItem, Profiles, SideBarItemNote } from './';

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { TurnedInNot, CalendarMonth, Chat, Translate } from '@mui/icons-material';


export const SideBar = ({ drawerWidth = 40 }) => {

    const { auth } = useSelector( state => state );
    const { notes } = useSelector( state => state.agenda );
    const  { selectedIndex }  = useSelector( state => state.dashboard );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { overflowX: 'hidden', boxSizing: 'border-box', width: drawerWidth },
                    alignContent: 'space-between'
                }}
            >
                <Toolbar sx={{m: 4, alignItems: 'center', justifyContent: 'center'}}>
                    <Profiles { ...auth } />
                </Toolbar>


                <Divider />


                <List>
                    {
                        <SideBarItem key={ 0 } title={ 'Agenda' } icon={ <TurnedInNot/> } index={ 0 } />
                    }
                    {
                        <SideBarItem key={ 1 } title={ 'Calendario' } icon={ <CalendarMonth/> } index={ 1 } />
                    }
                    {
                        <SideBarItem key={ 2 } title={ 'Sala de reuniones' } icon={ <Chat/> } index={ 2 } />
                    }
                    {
                        <SideBarItem key={ 3 } title={ 'Traductor con IA' } icon={ <Translate/> } index={ 3 } />
                    }
                </List>

                <Divider />

                {
                    (selectedIndex === 0) ? 
                    <Box 
                        component='nav'
                        sx={{flexShrink: { sm: 0 } }}
                    >
                        <Typography variant="subtitle1" backgroundColor={'#f0f0f0'} textAlign={'center'}> Notas </Typography>
                        <List> 
                            {
                                notes.map( note => (
                                    <SideBarItemNote key={ note.id } { ...note } />
                                ))
                            } 
                        </List>
                    </Box>

                    : ''
                }
            </Drawer>
        </Box>
    )
}