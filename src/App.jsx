import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav.jsx";
import NavBar2 from "./components/Nav2.jsx";
import Sign from "./components/SignIn.jsx";
import Profile from "./components/profile.jsx";
import { green } from "@mui/material/colors";
import Job from "./components/Job.jsx";
import Candidatelist from "./Pages/Candidatelist.jsx";
import ProgressBar from "./components/progressBar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Main from "./Pages/Main.jsx";
import CandidateHome from "./Pages/CandidateHome.jsx";
import Joblist from "./components/Joblist.jsx";
import JoblistCandidate from "./Pages/JoblistCandidate.jsx";
import NotFound from './Pages/NotFound';
import JobCandidate from "./Pages/JobCandidate.jsx";



// import Joblist from "./components/Joblist";
import JobsList from "./Pages/JobsList.jsx";
import StepperForm from "./components/Stepperform";

// import node from "./assets/node.jpg";
import Navbar3 from "./components/Navbar3";
import JobApplications from "./Pages/JobApplications.jsx";
import URL from "./URL.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
 const [showNavbar, setShowNavbar] = useState(true);
 useEffect(() => {
  const token = localStorage.getItem("userToken");
  setIsLoggedIn(!!token); // Set login state based on token presence
}, []);

const handleLogout = () => {
  localStorage.removeItem("userToken");
  setIsLoggedIn(false);
};

  
  return (
    <Router>
        {showNavbar && (isLoggedIn ? <NavBar2/> : <NavBar />)}

      <Routes>
        <Route path="/expert/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl={`${URL}expert/signin`}>Sign In</Sign>} />
        <Route path="/candidate/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl="https://lobster-app-b66lv.ondigitalocean.app/candidate/signin">Sign In</Sign>} />
        <Route path="/admin/signin" element={<Sign but="Register" a="Login" text="Already have an account?" apiUrl="https://lobster-app-b66lv.ondigitalocean.app/admin/signin">Sign In</Sign>} />
        <Route path="/profile" element={<Profile value={80} color="green" userId={1}/>} />
        <Route path="/:text/:userId" element={<Profile />} />
        <Route path="/admin/job" element={<Job />} /> 
        <Route path="/admin/list/candidates" element={<Candidatelist head="Candidates" page="Candidatelist"/>}/>
        <Route path="/admin/list/experts" element={<Candidatelist head="Experts" page="Expertlist"/>}/>
        <Route path="/candidate/:userId/panel" element={<Candidatelist head="Select your panel" page="Panel"/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/" element={<Main/>}/>
        
        
        <Route path="/list/job" element={<JobsList head="Jobs" page="Userlist"/>}/>
        <Route path="/form" element={<StepperForm/>}/>
        <Route path="/" element={<CandidateHome setShowNavbar={setShowNavbar}/>}/>
        <Route path="/jobs" element={<JoblistCandidate setShowNavbar={setShowNavbar} jobIds={["675528691affdfdb711f15ef", "675528691affdfdb711f15ef", "675528691affdfdb711f15ef"]} />}/>
        <Route path="/history" element={<JobApplications setShowNavbar={setShowNavbar}/>}/>
        <Route path="/job" element={<JobCandidate setShowNavbar={setShowNavbar}/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>

        
        
  </Router>
    
  );
}

export default App;

