import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';

import Crop from './Components/Pages/Crop';


import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <div className='main'>
     <Navbar />
      <div className="container">
  
        <Routes>
          <Route path="/" element={<Home />}/>
            
          <Route path= "/Crop" element = {<Crop />} />
         

        </Routes>
      </div>
     
      </div>

  
    
  );
}

export default App;
