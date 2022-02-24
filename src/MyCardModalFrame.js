import React from 'react';
import styled from 'styled-components';
import MyCardModalCss from './MyCardModal.css'
import Vector from './Vector.png'

const ModalFrame = (props) => {    
  const  { open, close} = props; 
    return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
        <div className="MyCardModalFrame" >
        
            <div className="ModalBack">
              <div className="ModalBlock"/>
              <img src={Vector} className="myVector"/>
              <div onClick={close}>
                <p className="Backhome">Back to Home</p>
              </div>
           
                <div className="ModalContents">
                   
                </div>
                <main>{props.children}</main>
            </div>
        </div>) : null }
        
     </div>
    );
};

export default ModalFrame;