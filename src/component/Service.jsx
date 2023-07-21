import React from "react";

const Service = ()=>{
   return (
    <>
    
    <div className="servicebox">
    
<ul className="bord">
  <li className="col span-1-of-3 box">
    <img src="air.jpg" alt="Blog Image 1" />
    <h3 className="copy1">by air</h3>
  </li>
  
  <li className="col span-1-of-3 box">
  <img src="train2.jpeg" alt="Blog Image 1" />
  <h3 className="copy1">by train</h3>
  </li>
  
  <li className="col span-1-of-3 box">
    <img src="car.jpeg" alt="Blog Image 3" style={{ textAlign: "center" }} />
    <h3 className="copy1">by road</h3>
  </li>
</ul>
</div>

    </>
   )
}
export default Service