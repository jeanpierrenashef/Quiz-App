import {createSlice} from "@reduxjs/toolkit";

const quizesSlice = createSlice({
    name : "quizes",
    initialState : {
        list:["hello"]
    },
    reducers:{
        loadQuizes: (state, action) => {
            const quizes = action.payload;

            return {
                ...state,
                list:quizes,
            };
        },
        updateQuizes : () => {},
        editQuizes : () => {},
        deleteQuizes : () => {}
    }

});
export default quizesSlice;

