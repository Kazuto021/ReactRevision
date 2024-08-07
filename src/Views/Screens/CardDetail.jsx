import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const CardDetail = () => {
    const location = useLocation()
    const [data, setData] = useState({
        bgImg:location.state.bgImage,
        sales:location.state.sales,
        title:location.state.title
    });
    console.log(location.state)
  return (
    <div>
        <div>
            <h1>Title: {data.title}</h1>
            <img src={data.bgImg} height="200px" width="150px" alt="" srcset="" />
            <h3>Sales: {data.sales}</h3>
        </div>
    </div>
  )
}

export default CardDetail