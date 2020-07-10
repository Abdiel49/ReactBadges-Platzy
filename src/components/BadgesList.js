 import React from 'react'
 import { Link } from 'react-router-dom'

 
import './styles/BadgeList.css'
import BadgeListItem from './BadgeListItem'

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
          <li key={badge.id} 
              className="row BadgesListItem">
              <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}/edit`}>  
                <BadgeListItem badge={badge}/>
              </Link>  
          </li>
        );
      })}
    </ul>
    );
  }
 }

 export default BadgeList