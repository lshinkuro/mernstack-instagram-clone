import React from 'react'
import { Link } from 'react-router-dom'


const Signup =()=>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input 
                type="text"
                placeholder="email"
                />
                <input 
                type="text"
                placeholder="password"
                />
                <button className="btn waves-effect waves-light">Signup
                </button>
                <h5>
                    <Link to = "/signin">ALready have a acoount</Link>
                </h5>

            </div>
        </div>
    )
}

export default Signup