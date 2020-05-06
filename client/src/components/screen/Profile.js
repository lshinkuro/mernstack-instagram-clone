import React from 'react'


const Profile =()=>{
    return(
         <div style={{maxWidth:"700px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin :"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                </div>
                <div>
                    <h5>Ramesh mukesh</h5>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <h5>20 post</h5>
                        <h5>20 followers</h5>
                        <h5>20 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>

            </div>
         </div>
    )
}

export default Profile