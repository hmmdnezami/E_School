import React, { Component } from "react";
import TeacherNav from "./TeacherNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from "./TeacherDashboard";
import TeacherProfile from "./TeacherProfile";
import AddDiscussion from "./AddDiscussion";
import AddTest from "./AddTest";

export default class TeacherHome extends Component {
  render() {
    return (
      <>
      <Router>
      <TeacherNav  style = {{ margin : '5px'}}/>
      <Routes>
        <Route path = "/" element= {<TeacherDashboard/>}/>
        {/* <Route path ="/loginTeacher" element ={<LogTeacher/>}/> */}
        <Route path ="/teacherprofile" element ={<TeacherProfile/>}/>
        <Route path ="/addDiscussion" element ={<AddDiscussion/>} />
        <Route path="/addTest" element ={<AddTest/>} />
      </Routes>
    </Router>
       
        
      </>
    );
  }
}
