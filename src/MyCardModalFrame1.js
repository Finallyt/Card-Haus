import React from 'react';
import styled from 'styled-components';
import MyCardModalCss from './MyCardModal.css'

const ModalFrame = (props) => {    
  const  { open, close} = props; 
    return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
        <div className="MyCardModalFrame" >
            <div className="ModalBackground" />
            <div className="ModalBlock">
            <h1 className="close" onClick={close}>
              {' '}
             {' '}
             내 명함 등록하기
            </h1>
                <div className="ModalContents">
                   
                </div>
                <main>{props.children}</main>
            </div>
        </div>) : null }
        
     </div>
    );
};

export default ModalFrame;