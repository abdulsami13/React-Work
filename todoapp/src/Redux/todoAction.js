import { setTodos, addTodo, updateTodo, deleteTodo, setLoading, setError } from './todosSlice';

export const fetchTodos = (token) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch('http://localhost:9000/api/todos', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        dispatch(setTodos(data));  // Dispatch fetched todos
    } catch (error) {
        dispatch(setError(error.message));  // Dispatch error
    } finally {
        dispatch(setLoading(false));  // Stop loading
    }
};

export const createTodo = (todo, token) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:9000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(todo),
        });
        const data = await response.json();
        dispatch(addTodo(data));  // Dispatch new todo
    } catch (error) {
        dispatch(setError(error.message));  // Dispatch error
    }
};

export const editTodo = (id, updatedTodo, token) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:9000/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(updatedTodo),
        });
        const data = await response.json();
        dispatch(updateTodo(data));  // Dispatch updated todo
    } catch (error) {
        dispatch(setError(error.message));  // Dispatch error
    }
};

export const removeTodo = (id, token) => async (dispatch) => {
    try {
        await fetch(`http://localhost:9000/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        dispatch(deleteTodo(id));  // Dispatch deleted todo ID
    } catch (error) {
        dispatch(setError(error.message));  // Dispatch error
    }
};
