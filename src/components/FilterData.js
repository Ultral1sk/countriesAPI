import React from 'react'

const FilterData = ( props ) => {
      console.log(props, ` comming from filtered data`)
      return <div className="search-main-wrapper">
                  <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="search-input-control form-control" placeholder="Search" />
                  </div>
      </div> 
    
      
}

export default FilterData
