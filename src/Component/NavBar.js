import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import '';

function NavBar() {
  return (
    <nav>
        <button className='home-btn'><a href='/'>TalkZone</a></button>
        <div className='right-btn-div'>
        <a href='/login'><button>LogIn</button></a>
        <a href='/signup'><button>SignUp</button></a>
        
        </div>
    </nav>
  )
}

export default NavBar