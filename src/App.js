
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="3"/> */}
    <Navbar title='TextUtil' mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={ <Textbox heading ="Enter Text to analyze" mode={mode}/>}/>
        </Routes>
    </div>
    </Router>   
    
    
    {/* we made a component called navbar which we returned through this tag and we can modify it later in navbar.js file */}
    </>
    // you can only return all contents of the jsx (which is the content of the app you are returning) in one enclosing tag in this case div if i return another tag side byside it rquires an empty jsx fragment tag that is <>*content here* </> then it would return it
  );
}

export default App;
