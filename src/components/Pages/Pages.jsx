import React from 'react';
import element from '../../element.json'
import { useLocation } from 'react-router-dom';

const Pages = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log(id)
    return (
        <div>
            <div className='information'>
                <div className='nameElement'>
                    <p className='nameHome'>
                        Magnifique appartement
                    </p>
                    <p className='localisation'>
                        Ile de France - Paris 10e
                    </p>
                    <ul className='informationSupp'>
                        <li className='background'>Canal Saint Martin</li>
                        <li className='background'>République</li>
                    </ul>
                </div>
                <div className='informationPerson'>
                    <div className='person'>
                        <p className='namePerson'>Della <br/> Case</p>
                        <img src='' alt='' />
                    </div>
                    <p className='icone'></p>
                </div>
            </div>
            <div className='info'>
                <div className='width'>
                    <p className='nameDescription'><span>Description</span><i className="fas fa-chevron-up"></i></p>
                    <p className='infoDescription'>zfavz"vz"vrreav</p>
                </div>
                <div className='width'>
                    <p className='nameDescription'><span>Equipement</span><i className="fas fa-chevron-up"></i></p>
                    <p className='infoDescription' >evavavaeva'v</p>
                </div>
            </div>
        </div>

    );
};

export default Pages;
