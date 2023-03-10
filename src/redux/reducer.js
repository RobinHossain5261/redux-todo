import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //adding todos
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        //remove todos
        removeTodos: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
})
export const { addTodos, removeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;