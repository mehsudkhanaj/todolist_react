import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    // Add todo
    const addTask = (task) => {
        if (!task.text) {
            return;
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    };

    // Remove todo
    const removeTask = (id) => {
        let updatedTasks = todos.filter((task) => task.id !== id);
        setTodos(updatedTasks);
    };

    // Complete todo
    const completeTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isComplete: true };
            }
            return todo;
        });
        setTodos(updatedTasks);
    };

    return (
        <div>
            <TodoForm addTask={addTask} />
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} />
        </div>
    );
}
