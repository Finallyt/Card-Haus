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
    
        <React.Fragment>
                 <button onClick={openModal} className="getCard">명함 받기</button>
                 <ReceiveModal open={modalOpen} close={closeModal} header="명함 코드를 입력하세요">
                    <OtpInput/>
                    <p className="guideText">명함을 추가하려면 전달받은 번호를 입력해주세요</p>
                 </ReceiveModal>
         </React.Fragment>
   
    )   
}