import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { TurnedInNot, CalendarMonth, Thermostat, Translate, CurrencyExchange } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { SideBarItem, Profiles, SideBarItemNote } from './';

export const SideBar = ({ drawerWidth = 40 }) => {

    const { auth } = useSelector( state => state );
    const { notes } = useSelector( state => state.agenda );

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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    alignContent: 'space-between'
                }}
            >
                <Toolbar sx={{m: 4, alignItems: 'center', justifyContent: 'center'}}>
                    <Profiles { ...auth } />
                </Toolbar>
                <Divider />

                <List>
                    {
                        <SideBarItem key={ 1 } title={ 'Agenda' } icon={ <TurnedInNot/> }/>
                    }
                    {
                        <SideBarItem key={ 2 } title={ 'Calendario' } icon={ <CalendarMonth/> }/>
                    }
                    {
                        <SideBarItem key={ 3 } title={ 'El Tiempo' } icon={ <Thermostat/> }/>
                    }
                    {
                        <SideBarItem key={ 4 } title={ 'Traductor' } icon={ <Translate/> }/>
                    }
                    {
                        <SideBarItem key={ 5 } title={ 'Divisas' } icon={ <CurrencyExchange/> }/>
                    }
                </List>

                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SideBarItemNote key={ note.id } { ...note } />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}