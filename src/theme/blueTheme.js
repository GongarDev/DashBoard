import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#34C5B8' //Azul verdoso
        },
        secondary: {
            main: '#0C1B38' //azul marino
        },
        error: {
            main: '#E4717A' //Coral
        }
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                color: '#fff',
                backgroundColor: '#34C5B8',
                fontSize: '1rem',
                '&:hover': {
                    backgroundColor: '#0C1B38',
                    color: '#34C5B8',
                },
            },
          },
        },
        MuiIconButton:{
          styleOverrides: {
            root: {
              color: '#fff',
              backgroundColor: '#34C5B8',
              fontSize: '1rem',
              '&:hover': {
                  backgroundColor: '#0C1B38',
                  color: '#34C5B8',
              },
          },
          }
        },
        MuiTextField: {
          styleOverrides: {
            root: {
                color: '#fff',
                backgroundColor: '#f3f6f9',
                
                borderRadius: '4px',
                fontSize: '1rem',
                '&:hover': {
                    backgroundColor: '#f3f6f9',
                    color: '#ffffff',
                },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
                borderColor: '#f3f6f9',
                borderRadius: '4px'
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              backgroundColor: '#fff;',
          },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: '#fff;',
          },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              color: '#0C1B38',
              backgroundColor: '#fff;',
              fontSize: '1rem',

              '&:hover': {
                  backgroundColor: '#0C1B38',
                  color: '#ffffff',
              },
            },
          },
        },
        MuiListItemButton: {
          styleOverrides: {
            root: {
              color: '#0C1B38',
              backgroundColor: '#fff;',
              fontSize: '1rem',
              paddingTop: '4px',
              paddingBottom: '4px',
              '&:hover': {
                  backgroundColor: '#0C1B38',
                  color: '#ffffff',
              },
            },
          },
        },
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: '#34C5B8',
            },
          },
        },
      },
})