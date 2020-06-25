import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'

const DataRendering = ( props ) => {

      const countriesData = props.state;
      

      const renderCountries = countriesData ? countriesData.map((country, key )=> {
            
            return <div key={key}  className="ml-3 mr-3 mt-3 mb-3"> 
                     <div className="card " style={{width: "17rem", height: ''}} >
                        <Link to={{ pathname: `/country/${country.name}`, state:  country }}>
                        <img className="card-img-top" width="100%" height="180px" src={country.flag} alt="..."/>
                      <div className="card-body">
                        <h2 className="card-title">{country.name}</h2>
                        <h5 className="card-title">{country.nativeName}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                      </div>
                        </Link>
                    </div>
            </div>
          
      })
      : [] 
      return <div className="d-flex justify-content-center flex-wrap">
            {renderCountries}
      </div>
       
    
}

export default DataRendering
