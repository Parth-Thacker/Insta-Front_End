import "./card.css"
import horizontal from "./image/horizontal.png"
import heart from "./image/heart.png"
import share  from "./image/share.png"
const Card = ({post})=>{
    return(
        <>
        <section className="card">
            <section className="cardHeader">
                <div>
                    <div className="cardHeader_name">{post.name}</div>
                    <div className="cardHeader_location">{post.location}</div>
                </div>
                <span>
                    <img src={horizontal} alt="horizontal"/>
                </span>
            </section>
            <section className="cardImage">
                <img src={`http://localhost:8080/images/${post.image}`} alt="Postimage"/>
            </section>
            <section className="card-actions">
                <span><img src={heart} alt="heart"/></span> 
                <span><img src={share} alt="share"/></span>
                <span>{post.date.toString().split("T")[0]}</span>
            </section>
            <section className="likes">{post.likes} likes</section>
            <section className="discription">{post.discription}</section>
        </section>
        </>
    )
}

export default Card