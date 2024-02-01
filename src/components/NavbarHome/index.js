import './styles.css'
import React from 'react'
import LogoMarketCubosMain from '../LogoMarketCubosMain/index'
import MenuNavigation from '../MenuNavigation'
import IconCart from '../../assets/icon-cart.svg'
import StoreIcon from '../../assets/store-icon.svg'
import AccountIcon from '../../assets/account-icon.svg'


const NavbarHome = () => {
    return (
        <nav>
            <div className='logoContainer'>
                <LogoMarketCubosMain />
            </div>
            <div className='menuContainer'>
                <div className='MenuNavigation'>
                    <MenuNavigation
                        icon={IconCart}
                        nameIcon="Meu carrinho"
                    />
                </div>

                <div className='MenuNavigation'>
                    <MenuNavigation
                        icon={StoreIcon}
                        nameIcon="Meus anúncios"
                    />
                </div>

                <div className='MenuNavigation'>
                    <MenuNavigation
                        icon={AccountIcon}
                        nameIcon="Usuário"
                    />
                </div>

            </div>
        </nav>
    )
}

export default NavbarHome