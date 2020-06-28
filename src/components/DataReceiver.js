import React                from 'react'
import { Link, useHistory } from 'react-router-dom'


const DataReceiver = ( props ) => {

      const history = useHistory();
      const incommingProps = history.location.state  
      const toggleMode = props.toggleMode
      const borders = incommingProps.borders.map( ( border,key ) => <span key={ key } className=" badge badge-pill badge-danger ml-1 mr-2 ">
                                                                              { border }
                                                                    </span>
      )
      return <div className={`${toggleMode ? "toggleBackgroundElementModeDark" : "toggleModeWhite"}`} style={{ height: '100%'}}>
                 


            <div   style={{ height : '100%' }} >
            <div className="container d-flex justify-content-evenly" >
                   

                   <Link to="/"     className={`backButton pt-2 pb-2  m-5 ${toggleMode ? "toggleBackgroundElementModeDark" : "toggleModeWhite"}`}  >
                         <i className="fa fa-arrow-left pl-5 "></i>
                         <i className="pl-2 pr-5">Back</i>
                   </Link>
             </div>


                        <div             className=" row col-12 d-flex  justify-content-center pt-5" style={{minHeight: '75.9vh', maxHeight: 'auto'}} >
                              <div className="d-flex justify-content-around flex-wrap" style={{ width: "85vw", height: '50%' }}>

                              <div       className=" col-12 col-md-12 " style={{ maxWidth: '600px', maxHeight:'400px',  width: '100%'}}>
                                    <img className=" img " width=" 100% "  src={incommingProps.flag} alt={incommingProps.name} />   
                              </div>

                              <div       className="   text- pt-5 " style={{maxHeight:'400px'}}>
                                    <h2  className=" card-title ">                                 {incommingProps.name}                  </h2>
                                    <p   className=" card-title pt-5 "> <b>Native name</b>       : {incommingProps.nativeName}            </p>

                                    <p   className=" card-text ">       <b>Region</b>            : {incommingProps.region}                </p>
                                    <p   className=" card-text ">       <b>Sub Region</b>        : {incommingProps.subregion}             </p>
                                    <p   className=" card-text ">       <b>Capital</b>           : {incommingProps.capital}               </p>
                                    <p   className=" card-title ">      <b>Population</b>        : {incommingProps.population}            </p>
                                    <p   className=" card-text ">       <b>Borders</b>           : {borders}                              </p>
                              </div>  
                              
                              <section   className=" text-   pt-5 " style={{maxHeight:'400px'}}>
                                    <p   className=" pt-5 mt-5 ">      <b>Top domains </b>      : {incommingProps.topLevelDomain}         </p>
                                    <p>                                <b>Currencies</b>        : {incommingProps.currencies[0].name}     </p>
                                    <p>                                <b>Symbol</b>            : {incommingProps.currencies[0].symbol}   </p>
                                    <p>                                <b>Languages</b>         : {incommingProps.languages[0].name}      </p>                       
                              </section>
                        </div> 
                  </div> 

            </div>


      </div>

    
}

export default DataReceiver


