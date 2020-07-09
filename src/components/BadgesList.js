 import React from 'react'
 import { Link } from 'react-router-dom'

 import Gravatar from './Gravatar'
 import './styles/BadgeList.css'

 class BadgeList extends React.Component{
  render () {
    if( this.props.badges.length === 0){
      return (
        <div>
          <h3>No badges were found</h3>
          <Link
            to='/badges/new'
            className='btn btn-primary'
          >
            Create New Badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled BadgeList ">
      { this.props.badges.map( badge => {
        return (
          <li key={badge.id} className="row BadgesListItem">
            <Gravatar 
              email={badge.email}
              alt={badge.firstName}
              className="col-3 Avatar"
            />
            <div className="Badge__info col-8">
              <div className="text-uppercase" >{ badge.firstName } { badge.lastName }</div>
              {badge.jobTitle}
              <div 
                className="Email text-lowercase" >
                { badge.email }
              </div>
              <div className="Twitter">@{badge.twitter}</div>
            </div>
          </li>
        );
      })}
    </ul>
    );
  }
 }

 export default BadgeList