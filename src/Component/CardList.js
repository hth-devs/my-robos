import React from 'react';
import Card from './Card';
import {robots} from './Robots';
const CardList = () =>{
    return(
        <div>
            <Card name={robots[0].name} email1="talha@admin.com"/>
            <Card name="Shoaib" email1="Shoaib@admin.com" />
            <Card />
        </div>
    );
}
export default CardList;