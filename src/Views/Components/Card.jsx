import React from 'react'
import "./styles/Card.scss"
const Card = (props) => {
  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <img src={props.bgImage} alt=""/>
        <div>
            Sales:{props.sales}
        </div>
    </div>
  )
}

export default Card