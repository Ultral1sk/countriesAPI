import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'


const DataReceiver = ( props ) => {

      const history = useHistory();
      const incommingProps = history.location.state
 


      console.log(incommingProps)
  
            
      //       return 
          
      // })
      // : [] 
      return <div className="d-flex justify-content-center flex-wrap">
           <div  className="ml-3 mr-3 mt-3 mb-3"> 
                  <div className="card " style={{width: "17rem", height: ''}} >
                   <img className="card-img-top" width="100%" height="180px" src={incommingProps.flag} alt="..."/>
                 <h2 className="card-title">{incommingProps.name}</h2>
                    <h5 className="card-title">{incommingProps.nativeName}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
         </div>

    
}

export default DataReceiver
