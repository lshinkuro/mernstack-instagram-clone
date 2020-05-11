import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from "react-router-dom"


const  CreatePost =()=>{
    const history = useHistory("")
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image,setImage]=useState("")
    const [url,setUrl]=useState("")
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt"),
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error,classes:"#d32f2f red darken-2"})
                }
                else{
                    M.toast({html:"create post succes",classes:"#388e3c green darken-2"})
                    history.push("/")
                }
            }).catch(err=>{
                console.log(err)
            })
           
        }
    },[url])
    const PosDetails=()=>{
        const data = new FormData()
        data.append('file',image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","kholislateralus")
        fetch("	https://api.cloudinary.com/v1_1/kholislateralus/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
       
        
    }
    return(
        <div className="card input-file"
             style={{
                margin:"40px auto",
                maxWidth:"700px",
                padding:"20px ",
                textAlign:"center"
             }}>
            <input type="text"
                   placeholder="title"
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                   />
            <input type="text"
                   placeholder="body"
                   value={body}
                   onChange={(e)=>setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn">
                    <span >fileUpload</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue-darken-1"
            onClick={()=>PosDetails()}>Post
            </button>
        </div>

    )
}

export default CreatePost