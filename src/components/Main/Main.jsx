import React from 'react';
import { Link } from 'react-router-dom'
import element from '../../element.json'
import Banner from '../Banner/Banner';

const Main = () => {
    
    return (
        <div>
            <Banner/>
        <div className='appartement'>
            { element.map( appartements => {
                    return(
                        <Link to={`/pages/${appartements.id}`}>
                        <div className='box' key={appartements.id}>
                            <img src={ appartements.cover} alt={ appartements.title }/>
                            <p className='textBox'>{ appartements.title }</p>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Main;

