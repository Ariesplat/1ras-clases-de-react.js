//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { CreatedTodoButton } from './CreatedTodoButton';
const todo = [
  
  { text:'cortar cebolla', completed: false},
  { text:'tomar el curso de intro a React', completed: false},
  { text:'llorar con la llorona', completed: false},
];

function App() {
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
     {todo.map(todo => (
       <todoItem key={todo.text} text= {todo.text}/>
     ))}
    </TodoList>
    <CreatedTodoButton />
    </React.Fragment>  


  );
}
    

export default App;
