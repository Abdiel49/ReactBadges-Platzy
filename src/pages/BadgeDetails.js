import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import Logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'


function useIncreaseCount(max){
  const [ count, setCount ] = React.useState(0)
  if(count > max){
    setCount(0)
  }
  return [count, setCount]
}

function BadgeDetails ( props ){

  const [ count, setCount ] = useIncreaseCount(5)
  const badge = props.badge
  
  return (
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col=6">
                <img src={Logo} alt="logo de la conferencia" />
              </div>
              <div className="col=6 BadgeDetails__hero-attendant-name ">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>

          </div>
        </div>
        <div className="container"> 
          <div className="row">
            <div className="col">
              <Badge 
                firstName={badge.firstName}
                lastName={badge.lastName}
                jobTitle={badge.jobTitle}
                email={badge.email}
                twitter={badge.twitter}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1)
                  }}
                  className="btn btn-primary mr-3">
                  Increase Count: {count}
                </button>
                <Link
                  className="btn btn-primary mb-4" 
                  to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button 
                  onClick={props.onOpenModal}
                  className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  onDeleteBadge={props.onDeleteBadge}
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BadgeDetails