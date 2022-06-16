import { useState } from "react";
import { TodoForm } from "./TodoForm";
import OPlano from "../assets/oplano.png";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^s*s$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^s*s$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>
        Qual <img src={OPlano} alt="O plano" width={35} /> para hoje?
      </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};