import './App.css';
import React from 'react';
import MyWallet from './MyWallet';
import ReceiveModal from './ReceiveModal';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import { useState } from 'react';
import MyPocket from './MyPocket.png'




import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import CardList from './CardList';


export default function Home() {
  

   
  
  const moveToTop = () => (document.documentElement.scrollTop = 0);
  const moveToSecond = (e) => (document.documentElement.scrollTop = 1000,1000) ;
  const [post, setPost] = useState([]);
  const CardNumber = 3;

  
  const [ScrollY, setScrollY] = useState(0);
  const [textColor, setTextColor] = useState('black');
  const [isBlack, setIsBlack] = useState(true);


  const handleChnageTextColor = (e) => {
    setIsBlack(!isBlack);
    setTextColor(textColor === 'black' ? '#CCCCCC' : 'black');
   }
   

  return (
    <div className="Home">
       <div className="Navdot">
       
       <button onClick={moveToSecond} className="scrolling1"  ><p>CardList</p></button>
       <button onClick={moveToTop} className="scrolling"><p> Main</p></button>
         
       </div>
     
    
       <MyWallet></MyWallet>
          <br/>
          <br/>
         <CardList/>
          
          <div className="flowShape"/>
        
        <img src={MyPocket} alt='' className="MyPocket">
        </img>
        <div className="Rectangle"></div>
          </div>
  );
}


