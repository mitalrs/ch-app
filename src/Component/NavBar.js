import React from 'react';
// import '';

function NavBar() {
  return (
    <nav>
        <button className='home-btn'><a href='/'>Home</a></button>
        <div className='right-btn-div'>
        <button><a href='/login'>LogIn</a></button>
        <button><a href='/signin'>SignIn</a></button>
        </div>
    </nav>
  )
}

export default NavBar