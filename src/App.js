import logo from './logo.svg';
import './App.css';
import UsersList from './component/UsersList';
import UserForm from './component/UserForm';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([]);
  const getUserInputHandler = (input) => {
    setData((prev) => [...prev, {id: data.length + 1, name: input}])
  }
  return (
    <div className="App">
     <h1>Users Data</h1>
     <UserForm getUserInput= {getUserInputHandler}  />
     <UsersList data={data} />
    </div>
  );
}

export default App;
