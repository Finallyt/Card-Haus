import React from 'react';
import './index.css';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SendCard from './sendCard';
import GetCard from './GetCard';

const Allo = (props) => {
    const { open, close, header } = props;
  
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
           
              {header}
              <button className="clo" onClick={close}>
                {' '}
                &times;{' '}
              </button>
         
             
            
            <main>{props.children}</main>
            <footer>
             
            </footer>
          </section>
        ) : null}
      </div>
    );
  };
  
  export default Allo;
