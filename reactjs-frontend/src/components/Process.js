
// import './App.css';
import React, {} from "react";
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Reservation from './AddCustomer';
import Record from './Record';
// import LogIn from './components/LogIn';
// import Process from './components/Process';
// import CustomerStatus from './components/CustomerStatus';

function Process() {
  return (
    <div className="App">
    <Router>
    <Sidebar />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        {/* <Route exact path="/customerstatus" element={<CustomerStatus />}></Route> */}
        <Route path="/records" element={<Record />}></Route>
        {/* <Route path="/login" element={<LogIn />}></Route> */}
      </Routes>
    </Router>
    {/* <LogIn /> */}
  </div>
  );
}

export default Process;
