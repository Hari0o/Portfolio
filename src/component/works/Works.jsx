import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Caset Web",
      desc:
        "Worked in Caset as Developer intern it's a start up company. ",
      img:
      './assets/caset.png'
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Porfolio",
      desc:
        "Designed the personal porfolio about my self and my works",
      img:
      './assets/porfolio.png'
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Keeper Note",
      desc:
        "It's a Keeper Note Web built with React by using useState",
      img:
        './assets/keeperapp.png'    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "TinDog",
      desc:
        "It's a basic website built with HTML & CSS.",
      img:
        './assets/tindog.png'    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
