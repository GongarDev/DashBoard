
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { dashboardSlice } from './dashboard';
import { agendaSlice } from './dashboard/agenda';
import { calendarSlice } from './dashboard/calendar';
import { chatSlice } from './dashboard/chat';
import { uiSlice } from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    auth:      authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    ui:        uiSlice.reducer,
    agenda:    agendaSlice.reducer,
    calendar:  calendarSlice.reducer,
    chat:      chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

