import { width } from '@fortawesome/free-solid-svg-icons/faTrash';
import React from 'react'
import {Link} from 'react-router-dom'
const SideBar = ({name}) => {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
      };
   
        return (

    <div style={{display:"flex"}}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "100vh"}}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <img src="src/assets/icons/download.jpeg" style={{height:"100", width:"100"}} /><span style={{padding:"15px"}}className="fs-4">Rainbow Homes</span>
            </Link>
            
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link to="/housing" className="nav-link text-white" aria-current="page">
                  Housing
                </Link>
              </li>
              <li>
                <Link to="/jobdetails" className="nav-link text-white">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/finance" className="nav-link text-white">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/health" className="nav-link text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/housing" className="nav-link text-white">
                  Housing
                </Link>
              </li>
              <li>
                <Link to="/sendmessage" className="nav-link text-white">
                  Query
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>Hi, {name}</strong>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><Link className="dropdown-item" to="#" onClick={logOut}>Sign out</Link></li>
              </ul>
            </div>
          </div>
          </div>
    
        )
    }
     
   

 
export default SideBar