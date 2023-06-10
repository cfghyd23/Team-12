import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Finance from './components/Finance/Finance'
import Health from './components/Health/Health'
// import PRDetails from './components/PRDetails/PRDetails'
import Jobs from './components/Jobs/Jobs'
import Housing from './components/Housing/Housing'

function App() {
  
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  let [isAdminLogin, setIsAdminLogin] = useState(false); 
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
          <Route path="/userDetails" element={<UserDetails isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin}/>}/>
          <Route path="/jobdetails" element={<Jobs isAdminLogin/>} />
          <Route path="/finance" element={<Finance isAdminLogin/>} />
          <Route path="/health" element={<Health isAdminLogin />} />
          {/* <Route path="/requests" element={<PRDetails isAdminLogin/>} /> */}
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
