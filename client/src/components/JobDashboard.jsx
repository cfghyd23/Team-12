import React from 'react'
import Job from './JobBoard'
import JobsBoard from './JobsBoard'
import Search from './SearchBoard'

const JobDashboard = () => {
  return (
    <div>
    <Search/>
      <Job/>
      <JobsBoard/>
      
    </div>
  )
}

export default JobDashboard
