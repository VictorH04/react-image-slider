import { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import sliderData from "../sliderData";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [autoSlide, setAutoSlide] = useState([]);

  // If slideIndex is not at the end of the sliderData.length then slideIndex + 1 in the state
  // If slideIndex is equal to the length of sliderData then set the state of setSlideIndex back to 1
  const nextSlide = () => {
    if (slideIndex != sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  };

  // If slideIndex is not equal to 1, then subtract 1 from slideIndex state
  // if slideIndex is equal to 1 then set the slideIndex state to the length of the sliderData array.
  const prevSlide = () => {
    if (slideIndex != 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  };

  // Auto slide, is buggy sometimes
  //   useEffect(() => {
  //     setInterval(() => {
  //       if (slideIndex !== sliderData.length) {
  //         setSlideIndex(slideIndex + 1);
  //       } else if (slideIndex === sliderData.length) {
  //         setSlideIndex(1);
  //       }
  //     }, 6000);
  //   }, [slideIndex]);

  // mapping of the sliderdata and getting the current object(obj) and index(+1 because array based from 0)
  return (
    <div className="sliderContainer">
      {sliderData.map((obj, index) => {
        return (
          <>
            <div
              key={obj.id}
              className={slideIndex === index + 1 ? "slide active" : "slide"}
            >
              <img className="imgs" src={obj.img} alt="dddd" />
            </div>

            <p
              className={slideIndex === index + 1 ? "text active-text" : "text"}
            >
              {obj.text}
              <br />
              Index: {index}
            </p>
          </>
        );
      })}
      <BtnSlider nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

export default Slider;
