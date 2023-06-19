import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import UpdateUser from "./components/UpdateUser";
import Dashboard from "./components/Dashboard";
import "./components/Dashboard.css";
import CustomerRegister from "./components/CustomerRegister";
import Login from "./components/Login"; // <---- import Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/container" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/cuser/:id" element={<UpdateUser />} />
          <Route path="/" element={<Login />} />
          <Route path="/reg" element={<CustomerRegister />} />
          <Route path='/getDashboard' element={<Dashboard/>} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
