import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div className={`todo-app ${theme ? "light" : "dark"}`}>
      <div className="container-theme-button">
        <button 
        className={`theme-button ${theme ? "" : "active"}`}
        onClick={() => setTheme(!theme)}
        />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
