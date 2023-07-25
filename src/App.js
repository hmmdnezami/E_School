import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogStudent from './components/Student/LogStudent';
import Profile from './components/Student/Profile';
import StudentHome from './components/Student/StudentHome';
import TeacherHome from './components/Teacher/TeacherHome';
import LogTeacher from './components/Teacher/LogTeacher';
import Contact from './components/Contact';
import { useState } from 'react';



function App() {
  const [flag, setFlag] = useState("null") ; 

function setPage (pageName) {
  setFlag(pageName) ;
}
console.log(flag) ; 
  return (
  
    (flag === "null") ? <Router>
      <Header style = {{ margin : '5px'}}/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path ="/loginStudent" element ={<LogStudent setPage = {setPage}/> }/>
        <Route path ="/loginTeacher" element ={<LogTeacher setPage = {setPage}/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        {/* <Route path ="/profile" element ={<Profile/>}/> */}
      </Routes>
    </Router> :  <TeacherHome/> 

  );
}

export default App;
