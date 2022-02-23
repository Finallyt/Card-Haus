import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import OtpInput from './otpInput';
import RandomNum from './RandomNum';

export default function SendCard(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    
    return(

<div className="SendContainer">
  
  <React.Fragment>
      <button onClick={openModal} className="SendCard" >명함 전송</button>
      <Modal open={modalOpen} close={closeModal} header="명함 전송">
              아래 생성되는 번호를 입력하세요
          <RandomNum/>
      </Modal>
  </React.Fragment>

</div>

    )
}