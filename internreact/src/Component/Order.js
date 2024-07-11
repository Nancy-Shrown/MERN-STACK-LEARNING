import React from 'react'

const Order = ({price,title}) => {
  return (
    <div>
        <h1 style={{backgroundColor:"green"}}>ORDER PAGE</h1>
        <h2>{title}</h2>
        <h2>{price}</h2>


    </div>
  )
}

export default Order