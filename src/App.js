import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map';
import Key from './components/Key';
 

const App = () => {
   return(
        <div className='html'>
            <Map/>
            <Key/> 
        </div>
    );   
};

export default App;
