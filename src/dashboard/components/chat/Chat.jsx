
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { FirebaseApp } from '../../../firebase/config';
import { getFirestore, query, collection, orderBy, onSnapshot } from 'firebase/firestore';

import { saveMessage, setMessageInput } from "../../../store/dashboard/chat";

import { Grid } from '@mui/material';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from '@chatscope/chat-ui-kit-react';


export const Chat = () => {

    const FirebaseDB = getFirestore(FirebaseApp);
    const { auth } = useSelector( state => state );

    const [messages, setMessages] = useState([]);

    const dispatch = useDispatch();

    const sendMessage = async (message) => {
        dispatch(setMessageInput(message))
        dispatch( saveMessage() );
    }

    useEffect(() => {
        const q = query(collection(FirebaseDB, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach(doc => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages);
        })
        return () => unsubscribe();
    }, [])

    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        const format = { 
            month: 'long', 
            day: 'numeric' 
        };
        let h = date.getHours();
        let m = date.getMinutes();
        const time = h + ":" + m;
        const newDate = date.toLocaleDateString('es-US', format);
        return `${newDate} - ${time}`
    }

    return ( 
        <Grid
            className='animate__animated animate__fadeIn animate__faster chat-content'
            container
            spacing={ 0 }
            direction="column"
            justifyContent="flex-end"
            justifyItems= 'flex-end'
            sx={{ minHeight: 'calc(100vh - 230px)', borderRadius: 1 }}
        >
            <MainContainer responsive>
                <ChatContainer>  
                    <MessageList
                        style={{ overflowY: "scroll", maxHeight: 'calc(100vh - 280px)' }} 
                        autoScrollToBottom={true}
                    >
                        {
                            messages && messages.map((message, i) => {
                                return <Message 
                                            key={message.id} 
                                            model={{
                                                message: message.text, 
                                                sentTime: getDate(message.timestamp?.seconds*1000),
                                                direction: message.uid == auth.uid ? 'outgoing' : 'incoming',
                                                position: "single",
                                                sender: message.name
                                            }} 
                                            avatarPosition= { message.uid == auth.uid ? 'tr' : 'cl' }
                                        >

                                            <Avatar src={ message.photo } name={ message.name } />
                                            <Message.Header sender={ message.name } />
                                            <Message.Footer sentTime={ getDate(message.timestamp?.seconds*1000) }/>
                                            
                                        </Message>
                            })
                        }
                    </MessageList>
                    <MessageInput 
                        placeholder="Type message here" 
                        onSend={ sendMessage } 
                        attachButton={false}
                    />        
                </ChatContainer>
            </MainContainer>
        </Grid>
     );
}