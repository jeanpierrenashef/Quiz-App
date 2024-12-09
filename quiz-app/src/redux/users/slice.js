import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name : "users",
    initialState : {
        list:[],
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

            if (state.list.length > 0) {
                state.list[0].score += points; 
            }
            

        }
    }

});
export default usersSlice;
export const { loadUsers, userScore } = usersSlice.actions;