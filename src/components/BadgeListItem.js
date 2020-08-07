import React from 'react'

import Gravatar from './Gravatar'
import './styles/BadgeListItem.css'

class BadgeListItem extends React.Component{
//function BadgeListItem (badge){
  render () {  
  return(
    <div className="Badge__info row">
      
      <Gravatar 
        email={this.props.badge.email}
        alt={this.props.badge.firstName}
        className="col-2 Avatar"
      />
      
      <div className="Badge__info col-8">
        <div className="text-uppercase" >{ this.props.badge.firstName } { this.props.badge.lastName }</div>
        {this.props.badge.jobTitle}
        <div 
          className="Email text-lowercase" >
          { this.props.badge.email }
        </div>
        <div className="Twitter">@{this.props.badge.twitter}</div>
      </div>

    </div>
    )
  }
}

export default BadgeListItem