import React from "react"
import { Link,NavLink } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import dummy from './datag'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { chainInfo } from "./config/chain";
import App from './App.css'
import ScrollToTop from "./Scrolltotop";

export default function CardList(){

  const fetchCards = async () => {
    const res = fetch('Api')
    return (await res).json();
  }

  
   const Cards = () => {
    const { data,status} = useQuery('Cards', fetchCards)
   }

    const [post, setPost] = useState([]);
    const [ dataList, setDataList ] = useState([]);
 
  useEffect(() => {
    setDataList(dummy);
  }, [ ])


    return(

<div>
<div className="cardList">
<p className="CardNumber">I have { dummy.cards.length } Cards</p>
             
    
  <div className="DateSort">    <td>{moment(post.date).format('YYYY-MM-DD')}</td></div>
<hr className="Line"/>
<br></br>

<div className='container2' id='flex'>

              
                {
                  dummy.cards.map((cards,index) => {
                    return (
                      
                        <Link to={`/CardCard/${cards.id}`} className="nodeco">
                      <div key={index}>
                        

                        <div className="box"></div>
                        <p className="OwnerName1">
                       { cards.kor }/{ cards.eng }
                        </p>
                      </div>
                      </Link>
                      
                    )
                  }) 
                }
             

                
                
    
    </div>
    <br></br>

 


            
             

    </div>
</div>
    )
}