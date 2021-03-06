import React,{useEffect, useState,useContext}from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'

const Profile =()=>{
    const  [pics,setPics]= useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")}
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
            console.log(pics)
        })
    },[])
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
                   <h4>{state?state.name:"loading"}</h4>
                   <h5>{state?state.email:"loading"}</h5>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>{pics.length} posts</h6>
                       <h6>{state?state.followers.length:"0"} followers</h6>
                       <h6>{state?state.following.length:"0"} following</h6>
                   </div>
                </div>
            </div>
            <nav className="content">
            <div className="nav-content-ig white center-align">
                <ul>
                    <li><Link to="/">Postingan</Link></li>
                    <li><Link to="/userprofile">IGTV</Link></li>
                    <li><Link to="/contactuser">Tersimpan</Link></li>
                    <li><Link to="/drawmountain">Ditandai</Link></li>
                </ul>
            </div>
            </nav>
            <div className="gallery">
                    {
                        pics.map(item=>{
                            return(
                                <img key={item._id} className="item" src={item.photo} alt={item.title}/>
                            )
                        })
                    }
         

            </div>
         </div>
    )
}

export default Profile