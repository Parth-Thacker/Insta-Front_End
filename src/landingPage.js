import Image from"./image/lens-1418954@2x.png"
import "./lendingPage.css"
import {Link} from "react-router-dom"
const LandingPage = ()=>{
    return(
        <div className="container-sm">
            <img className="img-thumbnail" src={Image} alt="landing"/> 
            <div className="landingData" >
            <div className="landingText">10x Team04</div>
            <Link to="/viewPost">
                <button className="landingButton">Enter</button>
            </Link>
            </div>
        </div>
        
    )
}

export default LandingPage;