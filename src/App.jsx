
import React,{ Component } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Service from './component/Service'





function App() {
 

  return (
    <>
    <body>
      <nav>
        <ul className='navi'>
          <li><Link to="/">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/service">service</Link></li>   
        </ul>
      </nav>
      

     
      <Routes>
        <Route path="/" Component={About} exact/>
        <Route path="/contact" Component={Contact}/>
        <Route path='/home' Component={Home}/>
        <Route path='/service' Component={Service}/>
      </Routes>
     
{/* <div className='main'>
  <h1>welcome to fruits website</h1>
  <p className="line">Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Odio omnis fugit, sed tempora praesentium<br/> commodi error, hic recusandaerepudiandae neque<br/> ad molestias, atque veritatis labore quae eveniet autem in<span id="dots">...</span><span id="more"></span></p>
  
</div>

<div className="main2">
    <img src="slider-img.png" width="500px" height="500px" />
</div>      */}
</body> 


   </>
      
  
  )
}

export default App
