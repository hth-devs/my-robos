import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardArray = robots.map((val,i)=>{
        return  <Card key={robots[i].id} name={robots[i].name} email1={robots[i].email}/>
    })
    return(
        
        <div>
           {cardArray}
        </div>
    );
}
export default CardList;