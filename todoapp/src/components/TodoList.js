import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, removeTodo } from '../Redux/todoAction' 

const TodoList = ({ token }) => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector((state) => state.todos);

    useEffect(() => {
        if (token) {
            dispatch(fetchTodos(token));  // Fetch todos when token is available
        }
    }, [dispatch, token]);

    const handleDelete = (id) => {
        dispatch(removeTodo(id, token));  // Delete todo from Redux
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
