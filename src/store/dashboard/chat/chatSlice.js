import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: null,
        messageInput: '',
    },
    reducers: {
        setMessages: (state, action ) => {
            state.messages = {...action};
        },
        setMessageInput: (state, action ) => {
            state.messageInput = action.payload;
        },
    }
});

export const {
  setMessages,
  setMessageInput,
} = chatSlice.actions;