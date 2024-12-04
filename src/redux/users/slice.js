import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name : "users",
    initialState : {
        list:[],
        score:0
    },
    reducers:{
        loadUsers: (state, action) => {
            const users = action.payload;

            return {
                ...state,
                list:users,
            };
        },
        userScore : (state, action) => {
            const points = action.payload;

            state.score += points;
        }
    }

});
export default usersSlice;
export const { loadUsers, userScore } = usersSlice.actions;