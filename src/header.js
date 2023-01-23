import logo from "./image/icon@2x.png";
import cameraLogo from"./image/camera@2x.png"
import "./header.css"
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <div className="headerContainer">
            <div className="logoContainer">
                <img className="headerLogo" src={logo} alt="logo"/>
                <div className="headerText" >
                Instaclone
                </div>
                <div className="cameraLogo">
                <Link to="/addPost">
                    <img className="cameraLogo" src={cameraLogo} alt="camera"/>
                </Link>
                </div>
            </div> 
        </div>
    )
}

export default Header