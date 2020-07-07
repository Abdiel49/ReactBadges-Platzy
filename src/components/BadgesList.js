 import React from 'react'
 import './styles/BadgeList.css'

 class BadgeList extends React.Component{
  render () {
    return (
      <ul className="list-unstyled BadgeList ">
      { this.props.badges.map( badge => {
        return (
          <li key={badge.id} className="row BadgesListItem">
            <img 
              src={badge.avatarUrl}
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
              <spam className="Twitter">@{badge.twitter}</spam>
            </div>
          </li>
        );
      })}
    </ul>
    );
  }
 }

 export default BadgeList