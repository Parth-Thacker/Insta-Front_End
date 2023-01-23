import { useState } from "react"
import {Link} from "react-router-dom"
import "./postForm.css"
const PostForm = ()=>{
    const [username, setUsername] = useState('')
    const [address , setAddress] = useState('')
    const [imageFile, setImageFile] = useState('') ;
    const [discription, setDiscription] = useState(""); 

    const uploadPost = ()=>{
        const formData = new FormData()
        formData.append("username",username)
        formData.append("address",address)
        formData.append("discription",discription)
        formData.append("image_file", imageFile)

        fetch("http://localhost:8080/addpost", {
            method: 'POST',
            body: formData
        })
    }
    return(

       <div className="container">
        
             <input type="file" onChange={(e) => {
                setImageFile(e.target.files[0]) ;
            }} />
            <input placeholder="UserName" value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <textarea placeholder="discription" onChange={(e) => setDiscription(e.target.value)}></textarea>
            <Link to="/viewPost">
            <button onClick={uploadPost}>AddPost</button>
            </Link>
       
       </div>      
    )
}

export default PostForm