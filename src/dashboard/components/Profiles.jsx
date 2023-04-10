import { Typography, Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const Profiles = ( auth ) => {

  const name = auth.displayName;
  const photo = auth.photoURL ? auth.photoURL : null;
  
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Stack 
      direction="column" 
      justifyContent="center"
      alignItems="center"
      spacing={1} 
    ><Badge badgeContent={4} color="error" >      
      <Avatar src={photo} {...stringAvatar(name)} sx={{ width:80, height: 80 }} />
    </Badge>
      <Typography>{ name }</Typography>
    </Stack>
  )
}