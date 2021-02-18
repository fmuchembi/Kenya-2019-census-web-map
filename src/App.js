import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Key from './components/Key';
 

const App = () => {
   const [counties, setCounties] = useState(['hello'])
    
   return(
        <div className='html'>
         {counties.Length === 0?(<h1>Loading</h1>):
         ( <div>
             <Map/>
             <Key/>
           </div>
         )} 
        </div>
    );   
};

export default App;
