import React                from 'react'
import { Link, useHistory } from 'react-router-dom'


const DataReceiver = ( ) => {

      const history = useHistory();
      const incommingProps = history.location.state  

      const borders = incommingProps.borders.map( ( border,key ) => <span key={ key } className=" badge badge-pill badge-danger ml-1 mr-2 ">
                                                                              { border }
                                                                    </span>
      )
      return <div>
                  <div style={{ padding :  '8rem 0 0 14.5rem' }}>
                   

                        <Link to="/"     className=" backButton pt-2 pb-2  ">
                              <i className="fa fa-arrow-left pl-5 "></i>
                              <i className="pl-1 pr-5">Back</i>
                        </Link>
                  </div>


            <div                         className=" container-fluid d-flex justify-content-center align-items-center " style={{ height : '65vh' }} >


                        <div             className=" row col-10 justify-content-around ">
                              <div       className=" col-12 col-md-12 " style={{ maxWidth: '600px', width: '100%'}}>
                                    <img className=" img " width=" 100% " height=" 100% "      src={incommingProps.flag} alt={incommingProps.name} />   
                              </div>

                              <div       className=" col-3  text-white pt-5 ">
                                    <h2  className=" card-title ">                                 {incommingProps.name}                  </h2>
                                    <p   className=" card-title pt-5 "> <b>Native name</b>       : {incommingProps.nativeName}            </p>
                                    <p   className=" card-text ">       <b>Region</b>            : {incommingProps.region}                </p>
                                    <p   className=" card-text ">       <b>Sub Region</b>        : {incommingProps.subregion}             </p>
                                    <p   className=" card-text ">       <b>Capital</b>           : {incommingProps.capital}               </p>
                                    <p   className=" card-text ">       <b>Borders</b>           : {borders}                              </p>
                              </div>  
                              
                              <section   className=" text-white col-3  pt-5 ">
                                    <p   className=" pt-5 mt-5 ">      <b>Top domains </b>      : {incommingProps.topLevelDomain}         </p>
                                    <p>                                <b>Currencies</b>        : {incommingProps.currencies[0].name}     </p>
                                    <p>                                <b>Symbol</b>            : {incommingProps.currencies[0].symbol}   </p>
                                    <p>                                <b>Languages</b>         : {incommingProps.languages[0].name}      </p>                       
                              </section>
                        </div> 


            </div>


      </div>

    
}

export default DataReceiver


