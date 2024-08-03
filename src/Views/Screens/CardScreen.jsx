import React from 'react'
import Card from '../Components/Card'
import "./Styles/CardScreen.scss"
import { myDummyAPI } from '../../Utils/DummyApi'
const CardScreen = () => {
  return (
    <div className='card-container'>
      {myDummyAPI && myDummyAPI.map((card) => {
        return(
        <Card
          key={card.id}
          title={card.title}
          bgImage={card.bgImage}
          sales={card.sales} />
        )
      })}
    
    </div>
  )
}

export default CardScreen