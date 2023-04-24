
import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;

export const DashboardLayout = ({ children }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="left"
      justifyContent="top"
      sx={{ minHeight: '100vh', backgroundAttachment:'fixed', backgroundPosition:'center center', padding: {sm: 14, xs: 4} }}
    >
      <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

          <NavBar drawerWidth={ drawerWidth } />

          <SideBar drawerWidth={ drawerWidth } />

          <Box 
              component='main'
              sx={{ flexGrow: 1 }}
          >

              { children }
              
          </Box>
      </Box>
    </Grid>
  )
}
