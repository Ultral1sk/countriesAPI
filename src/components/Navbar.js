import React from 'react'

const Navbar = () => {
      return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-light pl-5">
                        <div className="pl-5">
                        <a className="navbar-brand text-white" href="#/">Countries across the World</a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                              </button>
                        </div>
                  </nav>
            </div>

      )
}

export default Navbar
