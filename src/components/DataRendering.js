import React      from 'react'
import { Link }   from 'react-router-dom'


const DataRendering = ( props ) => {

      // this data is a state that is passed from the parrent component
      const countriesData = props.state;
      

      // here since the data wont be comming immediately we have to take into consideration that the value inside the countriesData will be undefined
      // and we have to make a condition otherwise it'll throw an error       
      const renderCountries = countriesData ? countriesData.map((country, key )=> {     
            // wrapper, innerrwrapper, link wrapper
            return <div key={key}        className=" cards-wrapper "> 
                        <div                className="card-main-wrapper  card text-dark " style={{width: "20rem", height: '27rem'}} >
                              <Link            className="text-white text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >


                                    <div       className=" card-image-wrapper ">
                                          <img className=" img "                src={country.flag} alt={country.name} />   
                                    </div>

                                    <div       className=" card-body mt-3 ">
                                          <h3  className=" card-title ">            {country.name}           </h3>
                                          <p   className=" card-text ">Region     : {country.region}         </p>
                                          <p   className=" card-text ">Capital    : {country.capital}        </p>
                                          <p   className=" card-text ">Population : {country.population}     </p>   
                                    </div>

                        
                              </Link>
                        </div>
                   </div>
      })
      : [] 

      return <div className=" container-fluid d-flex justify-content-center flex-wrap ">
            {renderCountries}
      </div>
       
    
}

export default DataRendering
