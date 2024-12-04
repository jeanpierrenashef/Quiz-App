import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name : "users",
    initialState : {
        list:[]
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
            const score = action.payload;

            return {score};
        }
    }

});
export default usersSlice;

const quizSlice = createSlice({
    name:"quizes",
    initialState:[],
    reducers
})