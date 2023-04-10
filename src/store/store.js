
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { agendaSlice } from './dashboard/agenda';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    agenda: agendaSlice.reducer,
  },
});