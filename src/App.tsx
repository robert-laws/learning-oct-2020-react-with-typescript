import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'go to the grocery store'}]
  return (
    <div className='App'>
      <h2>App</h2>   
      <TodoList items={todos} />   
    </div>
  );
}

export default App;
