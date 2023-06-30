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

function App() {
  const flag = "null" ;
  return (
  
    (flag === "null") ? <Router>
      <Header style = {{ margin : '5px'}}/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path ="/loginStudent" element ={<LogStudent/>}/>
        <Route path ="/loginTeacher" element ={<LogTeacher/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        {/* <Route path ="/profile" element ={<Profile/>}/> */}
      </Routes>
    </Router> :  <TeacherHome/> 

  );
}

export default App;
