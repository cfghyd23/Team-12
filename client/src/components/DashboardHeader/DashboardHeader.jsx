import React from 'react';
// import  {IoMdNotifications} from 'react-icons/fa'
// import  {FiSettings} from 'react-icons/fa'
import './DashboardHeader.css';


function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            <div className='dashbord-header-right'>
                <img 
                    // src={IoMdNotifications}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img 
                    // src={FiSettings}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
                <img
                    className='dashbord-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' />
            </div>
        </div>
    )
}

export default DashboardHeader;