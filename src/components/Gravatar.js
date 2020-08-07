import React from 'react'
import md5 from 'md5'

function Gravatar ( props ) {
  const email = props.email
  const hash = md5(email)

  return (
    <div >
    <img
      className="Avatar"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt={props.fristName}
    />
    </div>
  )
} 

export default Gravatar