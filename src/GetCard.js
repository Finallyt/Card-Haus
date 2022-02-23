import React from 'react';
import { useState } from 'react';
import ReceiveModal from './ReceiveModal';
import OtpInput from './otpInput';

export default function GetCard(){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };




    return(
        <div>
        <React.Fragment>
                 <button onClick={openModal} className="getCard">명함 받기</button>
                 <ReceiveModal open={modalOpen} close={closeModal} header="명함 코드를 입력하세요">
                    <OtpInput/>
                 </ReceiveModal>
         </React.Fragment>
        </div>
    )   
}