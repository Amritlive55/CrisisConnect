import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import React from 'react';
import Home from './Components/Home.js';
import Knowledge from './Components/Knowledge.js';
import RegistrationForm from './Components/RegistrationForm.js'
import VolunteerRegistrationForm from './Components/VolunteerRegistrationForm.js'
import Donate from './Components/Donate.js';
import Contact from './Components/Contact.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const [AlertData, setAlertData] = useState(null);

  const showAlert=(message,type)=>{
     setAlertData({
      msg:message,
        type:type
     })
  }
  setTimeout(()=>{
    setAlertData(null);},3000
     )
  
  const toggleMode=()=>{
    if(Mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='black';
     document.body.style.color='white';
     showAlert("Dark mode has been enabled","warning");
    // document.title="TextUtils-Light Mode";
    //  setInterval(()=>{
    //   document.title="TextUtils is amazing";
    //  },2000)
    }
    else{
     setMode('light');
     document.body.style.backgroundColor='white';
     document.body.style.color='black';
     showAlert("Light mode has been enabled","success");
     //document.title="TextUtils-Dark Mode";
    }
 }
  return (
    <>
    {/*<Navbar title= "CrisisConnect"  Mode='light' toggleMode={toggleMode}/>
   <Home/>
    <Knowledge/>
    <RegistrationForm/>
    <Donate/>
   <VolunteerRegistrationForm/>
  <Contact/>*/}
  <Router>
  <Navbar title= "CrisisConnect"  Mode='light' toggleMode={toggleMode}/>
    <Routes>
    <Route exact path="/" element= {<Home/>}/>
    <Route exact path="/Knowledge" element= {<Knowledge/>}/>
    <Route exact path="/RegistrationForm" element= {<RegistrationForm/>}/>
    <Route exact path="/Donate" element= {<Donate/>}/>
    <Route exact path="/VolunteerRegistrationForm" element= {<VolunteerRegistrationForm/>}/>
    <Route exact path="/Contact" element= {<Contact/>}/>
    </Routes>
  </Router>


    </>
     
  
  );
}

export default App;
