import React from 'react'
import Order from "./Order"

const Product = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>

        <Order title={"PEN"} price={"20"}/>
    </div>
  )
}
export default Product

/*const Product =((title,price="50k"))
return (
    <div>
        <h1>{title}</h1>
        <h3>{price}</h3>
    </div>
  )
*/
