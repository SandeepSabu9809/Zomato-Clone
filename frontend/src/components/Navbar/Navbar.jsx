import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [item,setItem] = useState("mobile");
    
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setItem("home")} className={item==="home"?"active":""} >home</li>
        <li onClick={()=>setItem("menu")} className={item==="menu"?"active":""} >menu</li>
        <li onClick={()=>setItem("mobile")} className={item==="mobile"?"active":""} >mobile-app</li>
        <li onClick={()=>setItem("contact")} className={item==="contact"?"active":""} >contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
