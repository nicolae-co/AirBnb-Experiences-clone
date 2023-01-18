// import image from '../assets/katie-zaferes.png'
import star from "../assets/star.svg"


function Card(props) {
    
    return (
        <div className='card'>
            <img className='card--image' src={props.img} alt="image" />
            <div className='card--rating'>
                <img src={star} className='card--star' alt="star" />
                <span>{props.rating}</span>
                <span className='grey'>({props.reviewCount}) &#x00b7;</span>
                <span className='grey'>{props.country}</span>
            </div>
            <p className='card--text'>{props.title}</p>
            <p><span className='bold'>From {props.price}$</span> / person</p>
        </div>
    )
}

export default Card
