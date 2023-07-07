import React from 'react';
import { Link } from 'react-router-dom'
import element from '../../element.json'

const Main = () => {

    return (
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
    );
};

export default Main;

// const Main = () => {
//     return (
//         <div>
//             <div className='appartement'>
//                 <Link to='/pages'>
//                     <img src='' alt='' />images
//                     <p></p>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Main;

