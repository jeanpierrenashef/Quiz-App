import {createSlice} from "@reduxjs/toolkit";
const quizzes = []
//     {
//     id: 1,
//     title: "Fluid Mechanics",
//     questions: [
//         {
//         id: 1,
//         text: "What is the unit of viscosity?",
//         type: "multiple-choice",
//         options: ["Pascal-second", "Newton", "Joule", "Watt"],
//         answer: "Pascal-second",
//         },
//         {
//         id: 2,
//         text: "What does Bernoulli's principle describe?",
//         type: "multiple-choice",
//         options: [
//             "Energy conservation in fluid flow",
//             "Friction in fluid flow",
//             "Heat transfer in fluid",
//             "Mass conservation",
//         ],
//         answer: "Energy conservation in fluid flow",
//         },
//         {
//         id: 3,
//         text: "What is the density of water at standard temperature?",
//         type: "input",
//         answer: "1000 kg/m^3",
//         },
//     ],
//     },
//     {
//     id: 2,
//     title: "Electronics",
//     questions: [
//         {
//         id: 1,
//         text: "What is the SI unit of electrical resistance?",
//         type: "multiple-choice",
//         options: ["Ohm", "Farad", "Henry", "Watt"],
//         answer: "Ohm",
//         },
//         {
//         id: 2,
//         text: "Which component is used to store electrical energy?",
//         type: "multiple-choice",
//         options: ["Resistor", "Inductor", "Capacitor", "Transformer"],
//         answer: "Capacitor",
//         },
//         {
//         id: 3,
//         text: "What is the charge of an electron?",
//         type: "input",
//         answer: "-1.6 x 10^-19 C",
//         },
//     ],
//     },
// ];

const quizesSlice = createSlice({
    name : "quizes",
    initialState : {
        list:quizzes
    },
    reducers:{
        loadQuizes: (state, action) => {
            const quizes = Array.isArray(action.payload) ? action.payload : [action.payload];

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

