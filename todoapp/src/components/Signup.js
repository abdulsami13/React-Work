// filepath: /todo-app/src/components/Signup.js
import React, { useState } from 'react';
import { signup } from '../services/api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup({ username, password });
            alert('User created successfully');
        } catch (error) {
            alert('Error creating user');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
                />
                <button 
                    type="submit" 
                    style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;