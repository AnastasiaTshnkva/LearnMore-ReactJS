import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        name: '',
        id: '',
    },
    reducers: {
        userLoggedIn(state, action) {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.id = action.payload.id;
        }
        // userLoggedIn(state, action) {
        //     state.isLoggedIn = true;
        //     state.name = action.payload.name;
        //     state.id = action.payload.id;
        // }
    }
})

export default userSlice;