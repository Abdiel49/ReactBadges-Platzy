import React from 'react'
import { Link } from 'react-router-dom'

import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import api from '../api'

class Badges extends React.Component{
  
  state = {
    loading : true,
    error : null,
    date : undefined,
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState( {loading: true, error: null } )

    try{
      const data =  await api.badges.list()
      this.setState( { loading:false, data:data} )
    }catch (error){
      this.setState( { loading:false, error:error } )
    }
  }

  render(){
    if( this.state.loading === true){
      return <h3>Loading...</h3>
    }
    if( this.state.error){
      return <h3>Error: {this.state.error.message}</h3>
    }
    return (
      <React.Fragment>
        
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges_conf-logo"
                src={ confLogo }
                alt="conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link 
              to="/badges/new"
              className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList 
                badges={ this.state.data }
              />
              
            </div>
          </div>

        </div>
      </React.Fragment> 
    );
  }
}

export default Badges