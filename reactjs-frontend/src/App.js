
import './App.css';
import React, {} from "react";
// import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Reservation from './components/AddCustomer';
// import Record from './components/Record';
import LogIn from './components/LogIn';
import Process from './components/Process';
// import Process from './components/Process';
// import CustomerStatus from './components/CustomerStatus';

function App() {
  return (
    <div className="App">
    <Router>
    {/* <Sidebar /> */}
      <Routes>
        {/* <Route exact path="/" element={<LogIn />}></Route> */}
        {/* <Route exact path="/" element={<Process />}></Route> */}
        {/* <Route path="/reservation" element={<Reservation />}></Route> */}
        {/* <Route exact path="/customerstatus" element={<CustomerStatus />}></Route> */}
        {/* <Route path="/records" element={<Record />}></Route> */}
        {/* <Route path="/login" element={<LogIn />}></Route> */}
      </Routes>
    </Router>
    <Process />
  </div>
  );
}

export default App;
