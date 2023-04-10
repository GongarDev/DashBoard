import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#31ba4f'
        },
        secondary: {
            main: '#242424'
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
                color: '#ffffff',
                backgroundColor: '#31ba4f',
                fontSize: '1rem',
                '&:hover': {
                    backgroundColor: '#25913c',
                    color: '#ffffff',
                },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
                color: '#ffffff',
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
              backgroundColor: '#ffffff',
          },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              color: '#31ba4f',
              backgroundColor: '#ffffff',
              fontSize: '1rem',
              fill: '#31ba4f',
              '&:hover': {
                  backgroundColor: '#31ba4f',
                  color: '#ffffff',
              },
            },
          },
        },
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: 'inherit',
            },
          },
        },
      },
})