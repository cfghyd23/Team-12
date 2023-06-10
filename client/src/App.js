import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";
import JobDashboard from "./components/JobDashboard";
import AppIntial from "./components/AppIntial";
import Finance from './components/Finance/Finance'
function App() {
  
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (<>
    
    <Router>
    
      <div className="App">
     
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/jobdetails" element={<JobDashboard />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
