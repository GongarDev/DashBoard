import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Box } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';

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
                  src="../public/logo.png"
                />

                <IconButton 
                    color='primary'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
