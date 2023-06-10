import React from 'react'
import Job from './JobBoard'
import JobsBoard from './JobsBoard'
import Search from './SearchBoard'

const JobDashboard = () => {
  return (
    <div>
      <Job/>
      <JobsBoard/>
      <Search/>
    </div>
  )
}

export default JobDashboard
