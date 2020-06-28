import React from 'react'

// representational component
const CountryCard = ( props ) => {
      return <div key={props.key}        className=" cards-wrapper "> 
      <div                className="card-main-wrapper  card text-dark " style={{maxWidth: "20rem", width: 'auto', maxHeight: '30rem', height : 'auto'   }} >


                  <div       className=" card-image-wrapper ">
                        <img className=" img "                src={props.countryFlag} alt={props.countryName} />   
                  </div>

                  <div       className=" card-body mt-3 text-dark ">
                        <h3  className=" card-title ">            {props.countryName}           </h3>
                        <p   className=" card-text ">Region     : {props.countryRegion}         </p>
                        <p   className=" card-text ">Capital    : {props.countryCapital}        </p>
                        <p   className=" card-text ">Population : {props.countryPopulation}     </p>   
                  </div>

      
      </div>
 </div>
}

export default CountryCard
