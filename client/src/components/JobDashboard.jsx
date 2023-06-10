import React from 'react'
import Job from './JobBoard'
import JobsBoard from './JobsBoard'
import Search from './SearchBoard'
import SideBar from './Sidebar'

const JobDashboard = () => {
  return (
    <div>
    <SideBar>
    <Search/>
      <Job/>
      <JobsBoard/>
      </SideBar>
    </div>
  )
}

export default JobDashboard
