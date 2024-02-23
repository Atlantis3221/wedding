/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useMemo } from "react";
import { useTimer } from "react-timer-hook";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import names_2 from "./assets/names.svg";
import topFlower from "./assets/top_flower.png";
import text_1 from "./assets/text_1.svg";
import calendar from "./assets/calendar.svg";
import calendar_heart from "./assets/calendar_heart.svg";
import plan from "./assets/plan.svg";
import flower_1 from "./assets/flower_1.png";
import flower_2 from "./assets/flower_2.png";
import timing from "./assets/timing.svg";
import location from "./assets/location.svg";
import tg_button from "./assets/tg_button.svg";
import dresscode from "./assets/dresscode.svg";
import details from "./assets/details.svg";
import pojelaniya from "./assets/pojelaniya.svg";
import road from './assets/road.svg'
import Map from "./Map";

function Timer({ expiryTimestamp }) {
  const { totalSeconds, seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <div style={{ textAlign: "center" }}>
      <p>ДО СВАДЬБЫ ОСТАЛОСЬ</p>
      <div style={{ fontSize: "48px", fontWeight: "100" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

function App() {
  const time = new Date(1723885200000);
  const x = 56.27396867020905;
  const y = 85.18903970718384;
  const zoom = 16;

  const options = useMemo(
    () => ({
      center: [x, y],
      zoom,
    }),
    [x, y, zoom]
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="body">
      <div className="content">
        <div className="top-flower-wrapper">
          <img src={topFlower} className="top-flower" />
        </div>
        <p className="text-width">ПРИГЛАШЕНИЕ НА СВАДЬБУ</p>
        <img alt="name" src={names_2} className="img-width" />
        <p>17 / 08 / 2024</p>
        <Timer expiryTimestamp={time} />
        <img src={text_1} />
        <div className="calendar-wrapper">
          <img src={calendar} data-aos="zoom-in" data-aos-duration="3000" />
          <img
            src={calendar_heart}
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="calendar_heart"
          />
        </div>
        <div className="flowered-container more-padding">
          <img
            src={flower_1}
            className="flower-1"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <img src={plan} />
          <img src={timing} className="timing" />
          <img
            src={flower_1}
            className="flower-2"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
        <img src={location} />
        <Map width={400} height={400} options={options} />
        <a href="https://2gis.ru/directions/points/%7C85.189028%2C56.273911%3B70000001059100403?m=85.189633%2C56.273859%2F18.7%2Fr%2F-7.31" target="_blank">
          <img src={road} className="button" />
        </a>
        <div className="flowered-container">
          <img
            src={flower_2}
            className="flower-1"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <img src={dresscode} />
          <div className="dress-code">
            <p>Девушки</p>
            <div className="color-wrapper">
              <div className="color-tab" />
              <div className="color-tab" style={{ background: "#FFC0CB" }} />
              <div className="color-tab" style={{ background: "#f6d9be" }} />
              <div className="color-tab" style={{ background: "#e9a5a3" }} />
              <div className="color-tab" style={{ background: "#b76e79" }} />
            </div>
          </div>
          <div className="dress-code">
            <p>Мужчины</p>
            <div className="color-wrapper">
              <div className="color-tab" style={{ background: "#EBECED" }} />
              <div className="color-tab" style={{ background: "#A2AAB0" }} />
              <div className="color-tab" style={{ background: "#4c586f" }} />
            </div>
          </div>
          <img
            src={flower_2}
            className="flower-2"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
        <img src={details} />
        <a href="https://t.me/Nastya_t1" target="_blank">
          <img src={tg_button} className="button" />
        </a>
      </div>
    </div>
  );
}

export default App;
