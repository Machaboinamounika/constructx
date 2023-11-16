import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import EmpComponent from './Component/EmpComponent';
import Login from './Component/Login';
import UserComponent from './Component/UserComponent';
function App() {
  return (
    <Router>
      <div>   
        <EmpComponent/>
        <Login/>
        <UserComponent/>

      </div>
    </Router>
  );
}

export default App;