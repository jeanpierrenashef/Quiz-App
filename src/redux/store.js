import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/slice";
import quizesSlice from "./quizes/slice";

const store = configureStore ({
    reducer:{
        users : usersSlice.reducer,
        quizes : quizesSlice.reducer
    }
})
