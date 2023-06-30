import React, { Component } from "react";
import StudentNav from "./StudentNav";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class StudentHome extends Component {
  render() {
    return (
      <>
      <Router>
      <StudentNav  style = {{ margin : '5px'}}/>
      <Routes>
        <Route path = "/" element= {<Dashboard/>}/>
        {/* <Route path ="/loginStudent" element ={<LogStudent/>}/> */}
        <Route path ="/profile" element ={<Profile/>}/>
      </Routes>
    </Router>
       
        
      </>
    );
  }
}
