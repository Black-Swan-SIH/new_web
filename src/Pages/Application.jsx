import React from 'react'
import Navbar3 from '../components/Navbar3.jsx'
import Status from '../components/Status.jsx'

const Application = () => {
  return (
    <div>
        <Navbar3 />
        <div className='flex flex-col items-center justify-center w-screen mt-10'>

        <Status type={"Internship"} department={"Ministry of Defence"} location={"Gurugram, Haryana"} locationType={"Hybrid"} status={"Pending"}/>
        <Status type={"Internship"} department={"Ministry of Defence"} location={"Gurugram, Haryana"} locationType={"Hybrid"} status={"Pending"}/>
        <Status type={"Internship"} department={"Ministry of Defence"} location={"Gurugram, Haryana"} locationType={"Hybrid"} status={"Pending"}/>
        <Status type={"Internship"} department={"Ministry of Defence"} location={"Gurugram, Haryana"} locationType={"Hybrid"} status={"Pending"}/>
        </div>
        </div>
  )
}

export default Application