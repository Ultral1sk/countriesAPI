import React, { useState, useEffect } from 'react';
import { Route }                      from 'react-router-dom'
import axios                          from 'axios'

import DataReceiver                   from './components/DataReceiver';
import DataRendering                  from './components/DataRendering';
import Navbar                         from './components/Navbar';
import FilterData                     from './components/FilterData'
import './App.css';


function App( ) {

  const [state, setstate] = useState([]);

  useEffect(() => {
    
    axios.get(`https://restcountries.eu/rest/v2/all`)

    .then(response =>  { setstate(response.data) })
    .catch(err     =>  { return err });
    
  }, []);

    
    return (
      < >
        <Navbar />
     
        <Route exact  path='/' render={ () => ( <DataRendering state={state} /> )} /> 
        <Route exact  path='/country/:countryName' component={DataReceiver}        />
      </>
    );
}

export default App;