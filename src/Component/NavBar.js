import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import '';

function NavBar() {
  return (
    <nav>
        <button className='home-btn'><a href='/'>Home</a></button>
        <div className='right-btn-div'>
        <button><a href='/login'>LogIn</a></button>
        <button><a href='/signup'>SignUp</a></button>

        {/* <Link to={'/login'}>
          <button type='submit'>Login</button>
          </Link> */}
        </div>
    </nav>
  )
}

export default NavBar