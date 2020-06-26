import React, { useState } from 'react'
import { Link }            from 'react-router-dom'
import CountryCard         from './CountryCard'


const DataRendering = ( props ) => {

      // this data is a state that is passed from the parrent component
      let countriesData =  props.state;
 
      const [toggleData, settoggleData]       = useState(true)
      const [searchCountry, setSearchCountry] = useState('')
      const [filteredGames, setFilteredGames] = useState('')
      
      const searchHandler = ( e ) => {

            setSearchCountry(e.target.value);
            filterGames(e.target.value );
      }

      const filterGames = ( inputValue ) => {
            
            const filteredGame = countriesData.filter(country => country.name.toLowerCase().trim().includes(inputValue)); 
            settoggleData(!toggleData)
            return setFilteredGames(filteredGame);
      }
      
      // here since the data wont be comming immediately we have to take into consideration that the value inside the countriesData will be undefined
      // and we have to make a condition otherwise it'll throw an error   
      const countryToFilter = filteredGames ?  filteredGames.map((country, key ) => { 
            return <Link  key={key}  className="text-white text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >
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

      const renderCountries = countriesData ? countriesData.map((country, key ) => { 
            return <Link key={key}  className="text-white text-decoration-none " to={{ pathname: `/country/${country.name}`, state:  country }} >
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
      

      return <div className=" container-fluid d-flex justify-content-start flex-wrap ">
      <div className="search-main-wrapper ">
                  <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                              <input 
                                    onChange={searchHandler} 
                                    value={searchCountry}
                                    autoComplete="off"
                                    name="searchCountry" 
                                    type="text" 
                                    className="search-input-control form-control" 
                                    placeholder="Search"     
                              />
                  </div>      
      </div> 

      <div className=" container-fluid d-flex justify-content-center flex-wrap ">
            { toggleData ? renderCountries : countryToFilter}
      </div>
           
   
      
           
      </div>
       
    
}

export default DataRendering
