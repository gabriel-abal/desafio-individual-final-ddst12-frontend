import React from 'react'
import './styles.css'

const MenuNavigation = ({ icon, nameIcon }) => {
    return (
        <div className='nav-icon-container'>
            <div>
                <img className='icon-img' src={icon} alt='icon' />
            </div>
            <div>
                <p className='name-icon'>{nameIcon}</p>

            </div>
        </div>
    )
}

export default MenuNavigation