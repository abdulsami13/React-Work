import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo._id === action.payload._id); // Changed `id` to `_id`
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo._id !== action.payload); // Changed `id` to `_id`
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setTodos, addTodo, updateTodo, deleteTodo, setLoading, setError } = todoSlice.actions;

export default todoSlice.reducer;
