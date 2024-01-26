import './styles.css'
import Logo from "../../assets/logo-icon.svg"

function LogoMarketCubosMain() {
    return (

        <div>
            <div className='logoContainer'>
                <div>
                    <img className='logo-img' src={Logo} alt='Logo da cubos market' />
                </div>
                <div>
                    <h2 className='paragrafo-market-cubos'>Market Cubos</h2>

                </div>
            </div>
        </div>

    )
}

export default LogoMarketCubosMain;