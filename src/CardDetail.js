import React, {useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import dummy from './datag'

export default function CardDetail( { match}){
    const { cardID} = useParams();
    const cardNum = {cardID}
 
   
  
    

    return(
        <div>
           
           <h3>{cardID}번 카드 입니다.</h3>
        {dummy.cards[cardID -1 ].kor}
        {dummy.cards[cardID -1 ].eng}
        {dummy.cards[cardID -1 ].intro}
        
        </div>


    )

};

         
