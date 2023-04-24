
import { Chat } from '../components/chat/Chat'

import { Grid } from "@mui/material"


export const ChatPage = () => {

  return (
    <Grid 
        container 
        className='animate__animated animate__fadeIn animate__faster'
    >

      <Chat></Chat>
      
    </Grid>
  )
}
