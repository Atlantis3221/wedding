/* eslint-disable */
// @ts-nocheck
import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import names from './assets/names.svg';
import topFlower from './assets/top_flower.png';
import text_1 from './assets/text_1.svg';
import calendar from './assets/calendar.svg';
import calendar_heart from './assets/calendar_heart.svg';
import plan from './assets/plan.svg';
import flower_1 from './assets/flower_1.png';
import flower_2 from './assets/flower_2.png';
import timing from './assets/timing.svg';
import location from './assets/location.svg';
import tg_button from './assets/tg_button.svg';
import dresscode from './assets/dresscode.svg';
import details from './assets/details.svg';
import pojelaniya from './assets/pojelaniya.svg';


function Timer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days
  } = useTimer({ expiryTimestamp })

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '48px', fontWeight: '100'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  )
}

function App() {
  const time = new Date(1723885200000);

  useEffect(() => {
    Aos.init()
  }, [])

  return (  
    <div className='body'>
      <div className='content'>
        <div className='top-flower-wrapper'>
          <img src={topFlower} className='top-flower' />
        </div>
        <p className='text-width'>ПРИГЛАШЕНИЕ НА СВАДЬБУ</p>
        <img alt='name' src={names} className='img-width' />
        <p>17 / 08 / 2024</p>
        <Timer expiryTimestamp={time} />
        <img src={text_1} />
        <div className='calendar-wrapper'>
          <img src={calendar} data-aos="zoom-in" data-aos-duration="3000"/>
          <img src={calendar_heart} data-aos="zoom-out" data-aos-duration="3000" className='calendar_heart' />
        </div>
        <div className='flowered-container'>
          <img src={flower_1} className='flower-1' data-aos='fade-right' data-aos-duration="3000" />
          <img src={plan} />
          <img src={timing} className='timing' />
          <img src={flower_1} className='flower-2' data-aos='fade-right' data-aos-duration="3000" />
        </div>
        <img src={location} />
        <img src={tg_button} />
        <div className='flowered-container'>
          <img src={flower_2} className='flower-1' data-aos='fade-right' data-aos-duration="3000" />
          <img src={dresscode} />
          <img src={flower_2} className='flower-2' data-aos='fade-right' data-aos-duration="3000" />
        </div>
        <img src={details} />
        <img src={tg_button} />
        <div className='flowered-container'>
          <img src={flower_1} className='flower-1' data-aos='fade-right' data-aos-duration="3000" />
          <img src={pojelaniya} />
          <img src={flower_1} className='flower-2' data-aos='fade-right' data-aos-duration="3000" />
        </div>
      </div>
    </div>
  )
}

export default App
