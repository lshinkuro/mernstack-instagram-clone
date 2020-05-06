import React from 'react'


const Home =()=>{
    return(
       <div className="home">
           <div className="card home-card">
               <h5>ramesh</h5>
               <div className="card-image">
                   <img alt='some value' src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"/>
               </div>
               <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                   <h6>title</h6>
                   <p>this is amazing post</p>
                   <input type="text" placeholder="add acomment"/>
               </div>
           </div>
       </div>
    )
}

export default Home