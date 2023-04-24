import { Grid, Box } from '@mui/material';


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="left"
      justifyContent="top"
      sx={{ minHeight: '100vh', backgroundImage: `linear-gradient(
        to right,
        rgb(255, 255, 255),
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0.952),
        rgba(255, 255, 255, 0.733),
        rgba(255, 255, 255, 0),
        rgb(255, 0, 0,0)
        ), url(${"../public/background.jpg"})`, backgroundAttachment:'fixed', padding: {sm: 14, xs: 4} }}
    >

      <Grid item
        xs={ 3 }
        sx={{ 
            width: { sm: 450 },
            backgroundColor: 'transparent', 
            padding: 3, 
            borderRadius: 2,
        }}
      >
          
        <Box
          component="img"
          alignItems="center"
          sx={{
            height: 'auto',
            width: '100%',
          }}
          src="../public/logo.png"
        />
     
          { children }

      </Grid>

    </Grid>
  )
}