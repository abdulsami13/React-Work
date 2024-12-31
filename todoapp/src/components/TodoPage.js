import React from 'react';
import TodoList from './TodoList';

const TodoPage = ({ token }) => {
    return (
        <div>
            <h2>Your Todo Page</h2>
            <TodoList token={token} />
        </div>
    );
};

export default TodoPage;
