
import './App.css';
import React, { } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Record from './components/Record';
import LogIn from './components/LogIn';
import AddCustomer from './components/AddCustomer';
import axios from 'axios';
import Event from './components/Event';
import AddUser from './components/AddUser';
import ViewCustomer from './components/ViewCustomer';
import CustomerStatus from './components/CustomerStatus';
import EditForm from './components/EditForm';
import EditEvent from './components/EditEvent';

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route exact path="/viewcustomer/editproduct/:id" element={<EditForm />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/addrecord" element={<AddCustomer />}></Route>
          <Route exact path="/event" element={<Event />}></Route>
          <Route exact path="/adduser" element={<AddUser />}></Route>
          <Route exact path="/viewcustomer" element={<ViewCustomer />}></Route>
          <Route exact path="/customerstatus" element={<CustomerStatus />}></Route>
          <Route exact path="/editevent" element={<EditEvent />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
