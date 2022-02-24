import React from 'react';
import './index.css';

const Modal = (props) => {
    const { open, close, header } = props;
  
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
           
            <p className="getCardt">{header}</p> 
              
            
            <main>{props.children}</main>
           
            <button  onClick={close}>
            <div className="closebox"></div>
              </button>
              <button  onClick={close}>
            <div className="closebox1"></div>
              </button>
              <button  onClick={close}>
            <div className="closebox2"></div>
              </button>
              <button  onClick={close}>
            <div className="closebox3"></div>
              </button>
              <button  onClick={close}>
                    <p className="closeX">X</p>
              </button>
          </section>
        ) : null}
      </div>
    );
  };
  
  export default Modal;
