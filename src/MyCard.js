
import React from 'react';
import { useState } from 'react';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import Vector from './Vector.png'
import Modal from './Modal';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import ModalFrame from './MyCardModalFrame';
import CardInput from './CardInput.css'
import axios from 'axios';


export default function MyCard(){

    const [modalOpen, setModalOpen] = useState(false);
    const [bech32Address, setBech32Address] = useState("");

    const [data, setData] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const getData = () => {
    axios.get("/mattverse/cardhaus/namecard/card_info")
    .then((response) => {
      setData(response.data);
    });
  }

  const postData = async (Cards) => {
    return await axios("/mattverse/cardhaus/namecard/card_info", Cards)
}
  

  const [name, setName] = useState("")
  const [engName, setEngName] = useState("");
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEngNameHandler = (event) => {
      setEngName(event.currentTarget.value)
  }

  const onCompanyHandler = (event) => {
      setCompany(event.currentTarget.value)
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
 
  const onSubmit = (event) => {
    event.preventDefault()
   
    }

 
   
 
    return (
        <div>
          
         <React.Fragment>
        <p className="headerInfo2" onClick={openModal}>내 명함 바로가기</p>
 
      <ModalFrame open={modalOpen} close={closeModal} header="Modal heading">
        <div className="AllInput">
        <p className="MyInfo">이름</p>
        <div><input class="CardInput"name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} /></div>
        <p className="MyInfo">영어이름</p>
          <div><input name="engName" class="CardInput"type="text" placeholder="영어이름" value={engName} onChange={onEngNameHandler} /></div> <p className="MyInfo">소속</p>
          <div><input name="company"class="CardInput" type="text" placeholder="소속" value={company} onChange={onCompanyHandler} /></div>
          <p className="MyInfo">이메일</p>
          <div><input name="email" class="CardInput"type="email" value={email} onChange={onEmailHandler} /></div>
     
          <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">명함 생성하기</button></div>
          
        </div>
        <div className="MyCardis">
        <div><input name="name" className="CardInput_Name"type="text"  value={name} onChange={onNameHandler} /></div>
        <div><input name="engName" className="CardInput_EngName"type="text" value={engName} onChange={onEngNameHandler} /></div>
          <div><input name="company" className="CardInput_Company"type="text" value={company} onChange={onCompanyHandler} /></div>
          <div><input name="email" className="CardInput_email"type="email"  value={email} onChange={onEmailHandler} /></div>
         
         </div>
         
      </ModalFrame>
    </React.Fragment>
        
        </div>
    );
};

