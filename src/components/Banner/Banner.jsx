import React from 'react';
import image from '../../assets/images/Background.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={image} alt='Banner'/>
            <div className='bannerText'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
};

export default Banner;