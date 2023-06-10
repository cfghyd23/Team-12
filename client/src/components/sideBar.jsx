import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = ({sideNavState, setSideNavState}) => {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
      };
   
        return (
    
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "100vh"}}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-4">Rainbow Homes</span>
            </Link>
            
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <div  onClick={() => {setSideNavState(1)}} className="nav-link active" aria-current="page">
                  Housing
                </div>
              </li>
              <li>
              <div  onClick={() => {setSideNavState(1)}} className="nav-link text-white">
                  Jobs
                </div>
              </li>
              <li>
              <div  onClick={() => {setSideNavState(2)}} className="nav-link text-white">
                  Finance
                </div>
              </li>
              <li>
              <div  onClick={() => {setSideNavState(3)}} className="nav-link text-white">
                  Health
                </div>
              </li>
              <li>
              <div  onClick={() => {setSideNavState(4)}} className="nav-link text-white">
                  Response
                </div>
              </li>
            </ul>
            <div className="dropdown">
              <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Hi, Akshat</strong>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><Link className="dropdown-item" to="#" onClick={logOut}>Sign out</Link></li>
              </ul>
            </div>
          </div>
    
        )
    }
     
   

 
export default Sidebar