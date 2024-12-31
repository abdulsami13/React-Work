import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';  // Import useDispatch and useSelector
import { setTodos, addTodo, updateTodo, deleteTodo } from '../Redux/todosSlice'; // Import Redux actions
import { getTodos, createTodo, editTodo, deleteTodo as removeTodo } from '../services/api'; // Your API services

const Todo = () => {
    const token = useSelector((state) => state.auth.token);  // Get token from Redux store
    const todos = useSelector((state) => state.todos.todos);  // Get todos from Redux store
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editId, setEditId] = useState(null);

    // Fetch todos from API and update Redux store
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await getTodos(token);
                dispatch(setTodos(response.data));  // Set todos in Redux store
            } catch (error) {
                alert('Error fetching todos');
            }
        };
        if (token) {
            fetchTodos();
        }
    }, [token, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                const response = await editTodo(editId, { title, description }, token);
                dispatch(updateTodo(response.data));  // Update todo in Redux store
                setEditId(null);
            } else {
                const response = await createTodo({ title, description }, token);
                dispatch(addTodo(response.data));  // Add new todo to Redux store
            }
            setTitle('');
            setDescription('');
        } catch (error) {
            alert('Error creating or editing todo');
        }
    };

    const handleEdit = (todo) => {
        setTitle(todo.title);
        setDescription(todo.description);
        setEditId(todo._id); // Corrected to use _id
    };

    const handleDelete = async (id) => {
        try {
            await removeTodo(id, token);
            dispatch(deleteTodo(id));  // Remove todo from Redux store
        } catch (error) {
            alert('Error deleting todo');
        }
    };

    return (
        <div>
            <h2>Todos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    {editId ? 'Edit Todo' : 'Add Todo'}
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id} style={{ marginBottom: '10px' }}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button onClick={() => handleEdit(todo)} style={{ marginRight: '10px' }}>Edit</button>
                        <button onClick={() => handleDelete(todo._id)}>Delete</button> {/* Corrected to use _id */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
