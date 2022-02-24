
import React from 'react';
import { useState } from 'react';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import Vector from './Vector.png'
import Modal from './Modal';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import ModalFrame from './MyCardModalFrame';
import CardInput from './CardInput.css'
import { getKeplrFromWindow } from "@keplr-wallet/stores";
import { chainInfo } from "./config/chain"
import axios from 'axios';
import { useEffect } from 'react';
import {
  makeSignDoc,
  makeStdTx,
} from "@cosmjs/launchpad";

export default function MyCard(){

  const [keplr, setKeplr] = useState(null);
  const [bech32Address, setBech32Address] = useState("");
  const KeyAccountAutoConnect = "account_auto_connect";
    const [modalOpen, setModalOpen] = useState(false);
   

    const [data, setData] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

 


  const connectWallet = async () => {
    try {
      const newKeplr = await getKeplrFromWindow();

      if (!newKeplr) {
        throw new Error("Keplr extension not found");
      }

      await newKeplr.experimentalSuggestChain(chainInfo);
      await newKeplr.enable(chainInfo.chainId);

      localStorage.setItem(KeyAccountAutoConnect, "true");
      setKeplr(newKeplr);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const shouldAutoConnectAccount =
      localStorage?.getItem(KeyAccountAutoConnect) != null;
    const loadAccountInfo = async () => {
      if (keplr != null) {
        const key = await keplr.getKey(chainInfo.chainId);
        setBech32Address(key.bech32Address);
      }
    };

    if (shouldAutoConnectAccount) {
      connectWallet();
    }

    loadAccountInfo();
  }, [keplr]);


  async function handleSubmit(e) {
    e.preventDefault();
   
    
    const aminoMsgs = [
      {
        type: "errata/audit/MsgRegisterProtocol",
        value: {
          sender: bech32Address,
          title: e.target['title'].value,
          description: e.target['description'].value,
          source_code:  e.target['sourceUrl'].value,
          project_home: e.target['projectUrl'].value,
          category: e.target['category'].value,
        },
      },
    ];
    const fee = {
      gas: "200000",
      amount: [
        {
          amount: "0",
          denom: "uert",
        },
      ],
    };

    const signDoc = makeSignDoc(
      aminoMsgs,
      fee,
      chainInfo.chainId,
      ""
    );

    try {
      const signResponse = await keplr.signAmino(
        chainInfo.chainId,
        bech32Address,
        signDoc,
        undefined
      );
      const signedTx = makeStdTx(signResponse.signed, signResponse.signature);
      await keplr.sendTx(
        chainInfo.chainId,
        signedTx,
        "async"
      );
    }
    catch {
    }
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
        <div><input class="CardInput"name="name" type="text"  value={name} onChange={onNameHandler} /></div>
        <p className="MyInfo">영어이름</p>
          <div><input name="engName" class="CardInput"type="text"  value={engName} onChange={onEngNameHandler} /></div> <p className="MyInfo">소속</p>
          <div><input name="company"class="CardInput" type="text"  value={company} onChange={onCompanyHandler} /></div>
         
    
          <div><button type="submit" onSubmit={onSubmit} className="logbutton">명함 생성하기</button></div>
          
        </div>
        <div className="MyCardis">
        <div><input name="name" className="CardInput_Name"type="text"  value={name} onChange={onNameHandler} /></div>
        <div><input name="engName" className="CardInput_EngName"type="text" value={engName} onChange={onEngNameHandler} /></div>
          <div><input name="company" className="CardInput_Company"type="text" value={company} onChange={onCompanyHandler} /></div>
         
         
         </div>
         
      </ModalFrame>
    </React.Fragment>
        
        </div>
    );
};

