import React from 'react'
import { Link } from 'react-router-dom'

import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg' 
import './styles/Home.css'

function Home () {
  return (
    <React.Fragment>
    <div className="containerHome row" >
      <div className=" col-6 infoHome" >
        <img 
          className="confLogo"
          src={ confLogo }
          alt="conference logo"
        />
        <h1>PRINT YOUR BADGES </h1>
        <p>The easiest way to manage your conference</p>
        <Link
          className="btn btn-primary"
          to="/badges">
          Start Now
        </Link>
      </div>

      <img 
        className="col-6"
        src={ astronauts } 
        alt="astronauts" 
      />
    </div>
    </React.Fragment>
  )
}

export default Home;