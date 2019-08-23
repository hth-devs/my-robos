import React from 'react';

const Card = ({name, email1}) =>{
     
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${name}`} alt='robo'/>
            <h2>{name}</h2>
            <p>{email1}</p>
        </div>
    );
}
export default Card;

