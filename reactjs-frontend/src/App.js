
import './App.css';
import React, { } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Record from './components/Record';
import LogIn from './components/LogIn';
import AddCustomer from './components/AddCustomer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/reservation" element={<AddCustomer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
