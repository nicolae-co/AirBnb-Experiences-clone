import image from '../assets/katie-zaferes.png'
import star from "../assets/star.svg"

function Card() {
    return (
        <div className='card'>
            <img className='card--image' src={image} alt="image" />
            <div className='card--rating'>
                <img src={star} className='card--star' alt="star" />
                <span>5.0</span>
                <span className='grey'>(6) &#x00b7;</span>
                <span className='grey'>USA</span>
            </div>
            <p className='card--text'>Life lessons with Katie Zafares</p>
            <p><span className='bold'>From 136$</span> / person</p>
        </div>
    )
}

export default Card
