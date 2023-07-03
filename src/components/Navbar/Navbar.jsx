import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../assets/images/kasa.jpg'

const Banner = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={Image} alt='Logo' />
            </div>
            <div className='navbarChoice'>
            <NavLink to='/' className='navbarLink'>Accueil</NavLink>
            <NavLink to='/propos' className='navbarLink'>A propos</NavLink>
            </div>
        </div>
    );
};

export default Banner;