import React from 'react'


const Navbar = ()=>{
    return(
      <nav>
        <div className="nav-wrapper white">
        <a href="/home" className="brand-logo left">INSTAGRAM</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/signin">Login</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/createpost">CreatePost</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar