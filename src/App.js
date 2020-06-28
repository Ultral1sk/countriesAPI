import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch }                      from 'react-router-dom'
import axios                          from 'axios'
import Loading                        from './assets/Loading'
import DataReceiver                  from './components/DataReceiver';
import Navbar                         from './components/Navbar';
import ErrorRoute                     from './assets/ErrorRoute';
import './App.css';

const DataRendering = React.lazy(() => import('./components/DataRendering'));


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
            <Suspense fallback={<Loading />}>
              <Switch>
                  <Route exact  path='/' render={ () => ( <DataRendering state={state} /> )} /> 
                  <Route exact  path='/country/:countryName' component={DataReceiver}        />
                  <Route exact  path='/*' component={ErrorRoute}        />  
              </Switch>
            </Suspense>
      </>
    );
}

export default App;