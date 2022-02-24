import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Link,NavLink } from 'react-router-dom';
import Owner from "./Owners";
import { Router,Routes,Route } from 'react-router-dom';   
import React from "react";
import Vector from './Vector.png';
import Vector2 from './Vector2.png';
import AllModal from "./AllModal";
import MyCard from "./MyCard";
import "./App.css";
import "./index.css";
import { useEffect } from "react";
import CardDetail from "./CardDetail";
import { useState } from "react";
import ScrollToTop from "./Scrolltotop";
import { getKeplrFromWindow } from "@keplr-wallet/stores";
import { chainInfo } from "./config/chain"
import {
  makeSignDoc,
  makeStdTx,
} from "@cosmjs/launchpad";



export default function App(){
    const [keplr, setKeplr] = useState(null);
    const [bech32Address, setBech32Address] = useState("");  
    const [protocols, setProtocols] = useState([]);
    const KeyAccountAutoConnect = "account_auto_connect";
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

    useEffect(() => {{
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
    }

      }, [keplr]);
 
    
return(
<div >
<div className="back"></div>
<div className="header">
<BrowserRouter  onUpdate={() => window.scrollTo(0, 0)} >
<Routes>
<Route path="/" element={<Home/>}>

</Route>
<Route path="/Owner" element={<Owner/>}/> 

<Route path="/CardCard/:cardID" element={<CardDetail/>}></Route>

</Routes>
<Link to="/"><div className="serviceName">CARDAUS</div></Link>
<Link to="/Owner"  style={{ textDecoration: 'none' }}><p className="headerInfo3">내 명함을 가진 사람들은?</p></Link>

</BrowserRouter>
          <MyCard >
              
          </MyCard>


                <AllModal/>
                </div>
                <img src={Vector} alt=''
                className="Vector1"/>

                <img src={Vector2} alt=''
                className="Vector2"/>


<div>
            {bech32Address !== "" ? (
            <span >
              Connected as <code>{bech32Address}</code>
            </span>
          ) : (
            <button  onClick={connectWallet} className="connectWallet">
              Connect Wallet
            </button>
          )}
        </div>

        </div>
     
       

    )
}
