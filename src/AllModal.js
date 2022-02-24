
import React from 'react';
import { useState,useRef ,useEffect} from 'react';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import Vector from './Vector.png'
import Modal from './Modal';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import SendCard from './sendCard';
import GetCard from './GetCard';
import Allo from './AllModalSet';
import App from './App.css'
import { useDetectOutsideClick } from './detect';


export default function AllModal(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
   
      
      const contain = useRef(null);
      const [isActive, setIsActive] = useState(false);
      const onMouseEnter = () => setIsActive(!isActive);
      const onMouseLeave = () => setIsActive(!isActive);
      

   
 
   

    return(
      <div className="All">
        <React.Fragment>
      
      <Allo open={modalOpen} close={closeModal} header="">
        <div className="AllModal">
        
          
        </div>
          
      </Allo>
  </React.Fragment>
     
  
  <button onMouseEnter={onMouseLeave} className="ExchangeCard" >Exchange Namecard</button>
      <nav ref={contain} className={`menu ${isActive ? 'active' : 'inactive'}`}>
      <div onMouseLeave={onMouseEnter}className="mouseLeave">
        </div>
      <div onMouseLeave={onMouseEnter}className="mouseLeave2">
           </div>
           <div onMouseLeave={onMouseEnter}className="mouseLeave3">
           </div>
           <div onMouseLeave={onMouseEnter}className="mouseLeave4">
           </div>
  
         <SendCard/>
          <br/>
           <GetCard/>  
          
      </nav>
     
  </div>
    )
}