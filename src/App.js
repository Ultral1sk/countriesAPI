import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch }                        from 'react-router-dom'
import axios                                    from 'axios'
import Loading                                  from './assets/Loading'
import DataReceiver                             from './components/DataReceiver';
import Navbar                                   from './components/Navbar';
import ErrorRoute                               from './assets/ErrorRoute';
import './App.css';

const DataRendering = React.lazy(() => import('./components/DataRendering'));


function App( ) {

  const [state, setstate] = useState([]);
  const [toggleMode, settoggleMode] = useState(true)
  
  const toggleModeHandler = async (togleMode) => {
    return   settoggleMode   ( await togleMode)   // state is being toggled from the children component

  }

  useEffect(() => {
    
    axios.get(`https://restcountries.eu/rest/v2/all`)

    .then(response =>  { setstate(response.data) })
    .catch(err     =>  { return err });
    
  }, []);

    
    return (
      < >
        <Navbar toggleMode={toggleMode} clickHandler={toggleModeHandler}/>
            <Suspense fallback={<Loading />}>
              <Switch>
                  <Route exact  path='/' render={ () => ( <DataRendering toggleMode={toggleMode} state={state} /> )} /> 
                  <Route exact  path='/country/:countryName' render={ () => ( <DataReceiver toggleMode={toggleMode}  /> )}        />
                  <Route exact  path='/*' component={ErrorRoute}        />  
              </Switch>
            </Suspense>
      </>
    );
}

export default App;