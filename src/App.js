import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm'
import About from './components/About';
import { useState } from 'react';
 
function App() {

  const [mode, setMode] = useState('dark'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey';
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
  }}
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    {/* <About title="About Us"/> */}
    </div>
    </> 
  );
}

export default App;
