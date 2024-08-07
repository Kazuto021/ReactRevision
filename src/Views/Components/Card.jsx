import React, { useState } from 'react'
import "./styles/Card.scss"
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const nav = useNavigate()
  const [cardData, setCardData] = useState({
    // key:props.key,
    title:props.title,
    bgImage:props.bgImage,
    sales:props.sales
  });
  const clickTransferData = (e)=>{
    nav("/details",{state:cardData})
    console.log(cardData)
  }
  return (
    <div className='card' key={props.key} onClickCapture={clickTransferData}>
        <h2>{cardData.title}</h2>
        <img src={cardData.bgImage} alt=""/>
        <div>
            Sales:{cardData.sales}
        </div>
    </div>
  )
}

export default Card