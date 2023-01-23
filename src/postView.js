import { useState,useEffect } from "react"
import "./postView.css"
import Card from "./card"
import Header from "./header"

const PostView = ()=>{
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getpost").then((res)=>res.json()).then((data)=>
        {
            //console.log(data[0].image);
            setPosts(data)    
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        })
    },[])

    return(
        <>
        <Header/>
        <div className="posts-container">
            {posts.reverse().map((post,i)=>{
                return(
                    <Card post={post} key={i}/>
                )
            })}
        </div>

        </>
    )
}

export default PostView