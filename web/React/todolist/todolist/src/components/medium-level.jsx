import React, { useState,useEffect } from 'react'


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== '') {
            const newTodoItem = { id: Date.now(), text: newTodo,
                 completed: false };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const handleEdit = (id)=>{
        setEditing(id);
    };
    const handleSave = (id, text)=>{
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, text};
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditing(null);
    };
    const handleDelete = (id)=>{
        const updatedTodos = todos.filter((todo)=>todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"                    
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder='Add new todo' 
                    />
                    <button type='submit' >Add Button</button>                
            </form>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            {editing === todo.id ? (
                                <input type='text'
                                defaultValue ={todo.text}
                                onChange={(event)=>handleSave(todo.id,event.target.value)}
                                />
                            )
                        :( <span>{todo.text}</span>)}
                            
                           
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList

