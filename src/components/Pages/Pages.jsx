import React from 'react';
import elementJson from '../../element.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Carrousel from '../Carrousel/Carrousel';

const Pages = () => {

    const [count, setCount] = useState(false)

    const handleClick = function (e) {
        e.preventDefault()
        setCount(!count)
    }

    const [count2, setCount2] = useState(false)

    const handleClick2 = function (e) {
        e.preventDefault()
        setCount2(!count2)
    }

    const getId = (id) => {
        return elementJson.find((element) => element.id === id);
    }

    const { id } = useParams();
    const element = getId(id);
    console.log(element);

    return (
        <div>
            {/* <div className='banner'>
                {element.pictures}
                <div className='bannerText'>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div> */}

            <Carrousel />

            <div className='information'>
                <div className='nameElement'>
                    <p className='nameHome'>
                        {element.title}
                    </p>
                    <p className='localisation'>
                        {element.location}
                    </p>
                    <div className='flex'>
                        {element.tags.map((elem) => (
                            <div className={`background`}>
                                <p>{elem}</p>
                            </div> 
                        ))}
                    </div>
                </div>
                <div className='informationPerson'>
                    <div className='person'>
                        <p className='namePerson'>{element.host.name}</p>
                        <img className='pictureProfil' src={element.host.picture} alt='Profil' />
                    </div>
                    <p className='icone'></p>
                </div>
            </div>
            <div className='info'>
                <div className='width'>
                    <div onClick={handleClick}>
                        <p className='nameDescription'><span>Description</span><i className="fas fa-chevron-up"></i></p>
                    </div>
                    {count && (<p className='infoDescription'>{element.description}</p>)}
                </div>
                <div className='width'>
                    <div onClick={handleClick2}>
                        <p className='nameDescription'><span>Equipement</span><i className="fas fa-chevron-up"></i></p>
                    </div>
                    {count2 && (<p className='infoDescription'>{element.equipments.map((elem) => (
                                                                    <div>
                                                                        <p>{elem}</p>
                                                                    </div> 
                                                                ))}
                        </p>)}
                </div>
            </div>
        </div>

    );
};

export default Pages;
