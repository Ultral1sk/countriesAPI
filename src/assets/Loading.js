import React from 'react'
import loading from './loading.gif'


const Loading = () => {
      return (
            <div style={{width: '100%', height: '100vh'}} className="d-flex justify-content-center align-items-center">
            
                  <img src={loading} width="100px" height="100px" alt="loading spinner" />
           
            </div>
      )
}

export default Loading
