import { useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";

export function Carrousel({ frames }) {
  const [current, setCurrent] = useState(0);
  const length = frames.length;

  const nextFrame = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevFrame = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="carrousel-container">
      {length > 1 && (
        <div className="leftArrowBox" onClick={prevFrame}>
          <img src={left} alt="gauche" className="leftArrow" />
        </div>
      )}
      {length > 1 && (
        <div className="rightArrowBox" onClick={nextFrame}>
          <img src={right} alt="droite" className="rightArrow" />
        </div>
      )}
      {frames.map((frame, index) => (
        <div
          key={index}
          className={current === index ? "slider active-anim" : "slider"}
        >
          {index === current && <img src={frame} alt="appartement" />}
          {index === current && (
            <span className="slider__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
