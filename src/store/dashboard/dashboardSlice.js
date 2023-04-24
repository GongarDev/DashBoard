import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        selectedIndex: 0,
    },
    reducers: {
        setActiveMenu: ( state, { payload } ) => {
            state.selectedIndex = payload.index ;
        },
    }
});

export const { setActiveMenu } = dashboardSlice.actions;