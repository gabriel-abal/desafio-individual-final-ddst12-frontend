import './styles.css'
import Logo from "../../assets/logo-icon.svg"

function LogoMarketCubos() {
    return (

        <div className="container-logo">
            <div className='logo'>
                <img className='logo-img' src={Logo} alt='Logo da cubos market' />
            </div>
            <div className='market-cubos'>
                <h2>Market Cubos</h2>
            </div>
        </div>

    )
}

export default LogoMarketCubos;