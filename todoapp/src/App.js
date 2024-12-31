import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to get token from Redux
import Signup from './components/Signup';
import Login from './components/Login';
import Todo from './components/Todo';

const App = () => {
    // Get the token from the Redux store
    const token = useSelector((state) => state.auth.token);

    return (
        <Router>
            <nav>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/todos">Todos</Link>
            </nav>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} /> {/* Removed setToken */}
                <Route path="/todos" element={<Todo token={token} />} />
            </Routes>
        </Router>
    );
};

export default App;
