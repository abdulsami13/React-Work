import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
// import { setToken } from '../store';  // Import setToken action
import { login } from '../services/api';
import { setToken } from '../Redux/authSlice';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();  // Get dispatch function from Redux

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            dispatch(setToken(response.data.token));  // Dispatch token to Redux store
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            marginBottom: '10px',
            padding: '10px',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.heading}>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                style={styles.input}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Login</button>
        </form>
    );
};

export default Login;
