
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

import { AppBar, Grid, IconButton, Toolbar, Box } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
      dispatch( startLogout() );
  }


  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Box
                    component="img"
                    alignItems="center"
                    sx={{
                        height: '50px',
                        width: 'auto',
                    }}
                    src="/logo.png"
                />

                <IconButton 
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
