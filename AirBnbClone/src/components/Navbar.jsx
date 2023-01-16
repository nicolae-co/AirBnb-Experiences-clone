import airbnbLogo from '../assets/airbnbSvg.svg'

function Navbar() {
    return (
        <nav className='nav'>
            <img src={airbnbLogo} className='nav--logo' alt='airbnb logo' />
        </nav>
    )
}

export default Navbar
