import React from 'react'
import { Link } from 'react-router-dom'

const ErrorRoute = () => {
      return (
            <div style={{height: '90vh'}} className=" d-flex justify-content-center align-items-center">
            <h2>

                  Aren't you here to look for some countries?
                  If so please 
                  <Link to="/"className="text-danger"> return  </Link>to the proper path

                 
            </h2>
            </div>
      )
}

export default ErrorRoute
