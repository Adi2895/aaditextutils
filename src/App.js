import './App.css';
import Navbar from './components/Navbar';
import React  , {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router , 
  Routes, 
  Route
  // Link
} from "react-router-dom"; 

function App() {
  const[mode , setMode] = useState("dark"); 

  const [alert , setAlert] = useState(null); 

  const showAlert = (message , type)=>{
    setAlert({
      msg:message, 
      type:type
    })     

    setTimeout( ()=>{
      setAlert(null);
    } , 1000);
  }


  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode("dark"); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled." , "success"); 
    } else {
      setMode("light"); 
      document.body.style.backgroundColor = '#202136';
      showAlert("Dark mode enabled." , "warning"); 
    }
  }



  
  return (
    <>
    <Router>
      <Navbar title="TextUtils"  about="About" toggleMode= {toggleMode} mode={mode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove extra space" mode={mode} />}></Route>
    
    <Route exact path="/about" element={<About mode={mode} head="About us"/>}></Route>
    
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

