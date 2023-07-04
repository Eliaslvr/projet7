import React from 'react';
//import { Link } from 'react-router-dom'
import element from '../../element.json'
console.log(element);

const Main = () => {
    return (
        <div className='appartement'>
            { element.map( appartements => {
                    return(
                        <div className='box' key={appartements.id}>
                            <img src={ appartements.cover} alt={ appartements.title }/>
                            <p className='textBox'>{ appartements.title }</p>
                        </div>
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

