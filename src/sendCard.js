import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import OtpInput from './otpInput';
import RandomNum from './RandomNum';
import App from './App.css'
import index from './index.css'

export default function SendCard(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    
    return(


  
  <React.Fragment>
      <button onClick={openModal} className="SendCard" >명함 전송</button>
      <Modal open={modalOpen} close={closeModal} header="명함 보내기">
      <p className="guideText">생성 버튼을 누르고, 아래 생성되는 번호를 상대에게 알려주세요</p>
          <RandomNum/>
      </Modal>
  </React.Fragment>



    )
}