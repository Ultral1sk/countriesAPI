import React, { useState } from 'react'
import { Link }            from 'react-router-dom'
import CountryCard         from './CountryCard'


const DataRendering = ( props ) => {

      // this data is a state that is passed from the parrent component
      let countriesData =  props.state;
      const [ toggleClasses   , settoggleClasses ]    = useState(true)
      const [ toggleData      , settoggleData ]       = useState(true)
      const [ toggleRegion    , settoggleRegion ]     = useState(false)
      const [ searchCountry   , setSearchCountry ]    = useState('')
      const [ filteredCountry , setFilteredCountry ]  = useState('')
      const [ filterRegions   , setFilterRegions ]    = useState([])
      const [ targetedRegion  , setTargetedRegion ]   = useState([])


      const filterByRegion = async (e) => {
            // toggling the components in the render  as they become JSX parts
            setFilterRegions(e.target.value)
            settoggleClasses(false)
            settoggleRegion(true)
         
            //filtering the data thorugh region
            const filteredRegion = await countriesData.filter( region => region.region.includes(e.target.value)  )
            return setTargetedRegion(filteredRegion)
      }

   
      const searchHandler =  ( e ) => {
            // toggling the components in the render  as they become JSX parts
            settoggleData(false)
            settoggleRegion(false)
            settoggleClasses(true)

            // filtering the countries live through the input
            setSearchCountry(e.target.value);

            //the function that is going to receive an input value as a parameter and filter the countries through name
            searchFilter(e.target.value );
      }

      const searchFilter =  ( inputValue ) => {
            
            const filteredCountry = countriesData.filter(country => country.name.toLowerCase().trim().includes(inputValue)); 
            
            //taking the converted data and giving it in a new state so i can filter through after
            return setFilteredCountry(filteredCountry);
      }
      
      // here since the data wont be comming immediately we have to take into consideration that the value inside the countriesData will be undefined
      // and we have to make a condition otherwise it'll throw an error   
      const countryToFilter = filteredCountry ?  filteredCountry.map((country, key ) => { 
            return <Link  key={key}  className="text-dark text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >
                        <CountryCard 
                             
                              countryFlag       ={country.flag} 
                              countryName       ={country.name} 
                              countryRegion     ={country.region}
                              countryCapital    ={country.capital}
                              countryPopulation ={country.population}
                              />
                  </Link>                
            })
            : null

      const regionToFilter = targetedRegion ?  targetedRegion.map((country, key ) => { 
                  //on click send the value to the newly created path from the country that is going to be clicked
            return <Link  key={key}  className="text-dark text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >
                        <CountryCard 
                             
                              countryFlag       ={country.flag} 
                              countryName       ={country.name} 
                              countryRegion     ={country.region}
                              countryCapital    ={country.capital}
                              countryPopulation ={country.population}
                              />
                  </Link>                
            })
            :
            null


            
      let renderCountries = countriesData ? countriesData.map((country, key ) => { 
            return <Link key={key}  className="text-dark text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >
                        <CountryCard 
                           
                              countryFlag       ={country.flag} 
                              countryName       ={country.name} 
                              countryRegion     ={country.region}
                              countryCapital    ={country.capital}
                              countryPopulation ={country.population}
                              />
                  </Link>                
      })    
: null
 
      
      return <div className=" container-fluid d-flex justify-content-center flex-wrap p-0">
      <div className="search-main-wrapper mt-5 d-flex  flex-column  justify-content-sm-center justify-content-md-between flex-md-row   ">
                  <div className="form-group has-search mb-0">
                        <span className="fa fa-search text-white form-control-feedback"></span>
                              <input 
                                    
                                    onChange={searchHandler} 
                                    value={searchCountry}
                                    autoComplete="off"
                                    name="searchCountry" 
                                    type="text" 
                                    className="search-input-control form-control text-white" 
                                    placeholder="Search"     
                              />
                  </div>      
                     
                        <select  onChange={filterByRegion} className="select-region d-block  ">
                              <option value="" selected disabled hidden>Filter By Region</option>
                              <option name=""         value="" >All</option>
                              <option name="Europe"   value="Europe">Europe</option>
                              <option name="Africa"   value="Africa">Africa</option>
                              <option name="America"  value="America">America</option>
                              <option name="Asia"     value="Asia" >Asia</option>
                              <option name="Oceania"  value="Oceania">Oceania</option>
                        </select>

          
                 
                        
      </div> 

      <div className=" container-fluid d-flex justify-content-center flex-wrap ">
            {         
                  toggleData        ?  <div id={toggleClasses ? "rendered-country-data-on" : 'rendered-country-data-off' }>  {renderCountries} </div>
                                    :  <div id={toggleClasses ? "rendered-country-data-on" : 'rendered-country-data-off' } >  {countryToFilter} </div>
            }

            {
                  toggleRegion      ?  <div id={toggleClasses ? 'rendered-country-data-off'  : 'rendered-country-data-on'  }>  {regionToFilter} </div>
                                    :  <div id={toggleClasses ? 'rendered-country-data-off'  : 'rendered-country-data-on'  }>  {countryToFilter} </div>
            } 
      </div>
           
   
      
           
      </div>
       
    
}

export default DataRendering
