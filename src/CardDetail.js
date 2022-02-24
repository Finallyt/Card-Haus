import React, {useState, useEffect,useRef } from "react";
import {useParams } from "react-router-dom"
import dummy from './datag'
import App from './App.css'
import TimeLineComp from "./timeline";
import ScrollToTopOnMount from "./Scrolltotop";

export default function CardDetail( { match }){
  
    const { cardID} = useParams();
    const cardNum = {cardID};
   

 
    
   
  
    

    return(
        <div className='scroll-container'>
           <ScrollToTopOnMount/>
           
           <div className="CardimgBox">
           
           </div>

           

        <p className="dummycardName"> {dummy.cards[cardID -1 ].kor}/{dummy.cards[cardID -1 ].eng}</p>   
       

      <div className="mannam"><p className="mannamt"> &nbsp;&nbsp; &nbsp; &nbsp;  {dummy.cards[cardID -1 ].kor}님과의 만남</p></div>  
      <br/>
      <br/>
        <TimeLineComp/>

      </div>


    )
    };
