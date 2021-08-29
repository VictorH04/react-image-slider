import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const BtnSlider = ({ nextSlide, prevSlide }) => {
  return (
    <div>
      <button className="btnRight" onClick={nextSlide}>
        <img
          className="btnRight-img"
          src={rightArrow}
          alt="Right arrow for slider"
        />
      </button>

      <button className="btnLeft" onClick={prevSlide}>
        <img
          className="btnLeft-img"
          src={leftArrow}
          alt="Left arrow for slider"
        />
      </button>
    </div>
  );
};

export default BtnSlider;
