import React, { Component, useEffect, useState } from "react";
import SideBar from "./SideBar";
import UserSideBar from "./UserSideBar"

import db from "../assets/icons/db.jpg"
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const [sideNavState, setSideNavState] = useState(-1);
  return (
    <UserSideBar name={userData.fname}>
     
        <div  onClick={() => {setSideNavState(1)}}>
        </div>
        <div style={{display:"flex" }}>
        <img src={db} />
        </div>
        </UserSideBar>
    // <div className="auth-wrapper">
    //   <div className="auth-inner">
    //     <div>
    //       Name<h1>{userData.fname}</h1>
    //       Email <h1>{userData.email}</h1>
    //       <br />
    //       <button onClick={logOut} className="btn btn-primary">
    //         Log Out
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

