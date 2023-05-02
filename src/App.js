// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enable", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enable", "success");
      document.title = 'TextUtils - Light Mode'




    }
  }
  return (

    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route exact path="/" element={<TextForm textarea="Enter the Text Here" mode={mode} headline="Enter the text to analyze below" />
        } />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    // <>

    //   <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
    //   <Alert alert={alert}/>
    //   <TextForm textarea="Enter the Text Here"  mode={mode} headline="Enter the text to analyze below"/>
    //   <About/>

    // </>
  );
}

export default App;
