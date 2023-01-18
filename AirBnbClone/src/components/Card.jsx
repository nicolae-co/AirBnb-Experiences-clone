// import image from '../assets/katie-zaferes.png'
import star from "../assets/star.svg"


function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 

    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className='card--image' src={`./images/${props.coverImg}`} alt="image" />
            <div className='card--rating'>
                <img src={star} className='card--star' alt="star" />
                <span>{props.stats.rating}</span>
                <span className='grey'>({props.stats.reviewCount}) &#x00b7;</span>
                <span className='grey'>{props.location}</span>
            </div>
            <p className='card--text'>{props.title}</p>
            <p><span className='bold'>From {props.price}$</span> / person</p>
        </div>
    )
}

export default Card
