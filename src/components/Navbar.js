import React, { useState } from 'react'

const Navbar = (props) => {
      
      let toggleMode = props.toggleMode
      const [state, setstate] = useState(true)

      let toggleModeHandler = props.clickHandler
      
      const toggleParrentState =  () => {
            setstate(!state)
         return  toggleModeHandler(!state)
            
      }
 
      return (
            <div>
                  <nav className={`  ${toggleMode ? "toggleBackgroundElementModeDark" : "toggleModeNavbarBg"} p-4  container-fluid `} >
                       
                        <div style={{ width: '68vw', margin: '0 auto'}} className="d-flex justify-content-between">

                        <a className= {`  ${toggleMode ? "toggleBackgroundElementModeDark" : "toggleModeNavbarBg"} pr-5 h3`} href="/">Fun with Flags and Countries</a>
                        
                        <button onClick={toggleParrentState} className={`bg-transparent border-0 p-0  ${toggleMode ? "toggleBackgroundElementModeDark" : "toggleModeNavbarBg"} `}  type="button" >
                              <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-moon mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                              </svg>
                              <span className="h4 pl-4">Dark Mode</span>
                              
                        </button>
                        </div>
                  </nav>
            </div>

      )
}

export default Navbar
