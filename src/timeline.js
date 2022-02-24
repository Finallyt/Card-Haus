import React from 'react';
import { fireConfetti } from "./Confetti";
import TimelineObserver from "react-timeline-animation"  
import { useEffect, useRef, useState } from "react";


const Timeline = ({ setObserver, callback , props}) => {
    const [message1, setMessage1] = useState(<div></div>);
    const [message2, setMessage2] = useState(<div></div>);
    const [message3, setMessage3] = useState(<div></div>);
  
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
  
    const someCallback = () => {
      setMessage1(<div className="logt"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다시 만난 날!</div>);
      callback();
    };
  
    const someCallback2 = () => {
      setMessage2(<div className="logt">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;세번째 만남!</div>);
    };
  
    const someCallback3 = () => {
      setMessage3(<div className="logt">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;네번째 만남!</div>);
      fireConfetti();
    };
  
    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(circle1.current, someCallback);
      setObserver(circle2.current, someCallback2);
      setObserver(circle3.current, someCallback3);
    }, []);
  
    return (
      <div className="wrapper">
         
        
          <br/>
          <br></br>
        <div id="timeline1" ref={timeline1} className="timeline" />
  
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            1
          </div>
          <div className="message">{message1}</div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />
  
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            2
          </div>
          <div className="message">{message2}</div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
  
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            3
          </div>
          <div className="message">{message3}</div>
        </div>
       
      </div>
    );
  };
  
  export default function TimeLineComp() {
    const [message, setMessage] = useState("");
  
    const onCallback = () => {
      console.log(1);
    };
  
    return (
      <div className="TimelineWrap">
       
        <TimelineObserver
          initialColor="#B2B6B5"
          fillColor="#2EBEB5"
          handleObserve={(setObserver) => (
            <Timeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />
        <div className="stub2">{message}</div>
      </div>
    );
  }
  