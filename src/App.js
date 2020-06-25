import React, { useState, useEffect, Suspense } from 'react';
import {  Route, Switch, Router } from 'react-router-dom'
import DataReceiver from './components/DataReceiver';

import axios from 'axios'

import './App.css';
import DataRendering from './components/DataRendering';


function App( ) {

  var [state, setstate] = useState([])



  useEffect(() => {
    
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      setstate(response.data);  
      

    })
    .catch(err => err);
    
  }, []);

    
    return (
      <div className="App">
      <Route exact path='/' render={ () => ( <DataRendering state={state} /> )} />
      
      <Route exact  path='/country/:countryName' component={DataReceiver} />

        
     
      </div>
    );
}

export default App;