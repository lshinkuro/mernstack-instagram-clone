import React,{useContext}from 'react'
import {Link, useHistory}from 'react-router-dom'
import {UserContext}from '../App'


const Navbar = ()=>{
    const {state,dispatch}=useContext(UserContext)
    const history =useHistory()
    const renderList = ()=>{
      if(state){
        return [
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/createpost">CreatePost</Link></li>,
          <li>
              <button className="btn waves-effect waves-light #64b5f6 red-darken-1"
                      onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push('/signin')
                      }}
              >Logout
              </button>
          </li>
        ]
      }else{
        return [
          <li><Link to="/signin">Login</Link></li>,
          <li><Link to="/signup">Signup</Link></li>
        ]
      }
    }
    return(
      <nav>
        <div className="nav-wrapper white" style={{justifyContent:"space-around"}}>
        <Link href={state?"/":"/signin"} className="brand-logo left">INSTAGRAM</Link>
          <ul id="nav-mobile" className="right">
            
              {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar