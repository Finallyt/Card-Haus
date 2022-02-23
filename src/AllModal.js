
import React from 'react';
import { useState } from 'react';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import Vector from './Vector.png'
import Modal from './Modal';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import SendCard from './sendCard';
import GetCard from './GetCard';
import Allo from './AllModalSet';


export default function AllModal(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    return(
      
        <React.Fragment>
      <button onClick={openModal} className="ExchangeCard" >Exchange Namecard</button>
      <Allo open={modalOpen} close={closeModal} header="">
           <SendCard/> 
           <GetCard/>  
          
      </Allo>
  </React.Fragment>

     
    )
}