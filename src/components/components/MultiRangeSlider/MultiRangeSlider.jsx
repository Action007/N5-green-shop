import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import "./MultiRangeSlider.scss";
import { useSelector } from "react-redux";

const MultiRangeSlider = ({ onSubmitHandler }) => {
  const multiRange = useSelector((state) => state.products.multiRange);
  const { min, max } = multiRange;
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    setMinVal(multiRange.min);
    setMaxVal(multiRange.max);
  }, [multiRange])

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="multi-range">
      <span className='multi-range__heading'>Price Range</span>
      <form onSubmit={(event) => onSubmitHandler(event, minVal, maxVal)}>
        <label>
          <input
            className={classnames("thumb thumb--zindex-3", {
              "thumb--zindex-5": minVal > max - 100
            })}
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
              const value = Math.min(+event.target.value, maxVal - 1);
              setMinVal(value);
              event.target.value = value.toString();
            }}
          />
        </label>
        <label>
          <input
            className="thumb thumb--zindex-4"
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
              setMaxVal(value);
              event.target.value = value.toString();
            }}
          />
        </label>

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
        <div className="price__inner">
          <div className="price__wrap">
            <span className="price__text">Price:</span>
            <span className="slider__left-value">${minVal}</span>
            <span className="slider__right-value">${maxVal}</span>
          </div>
          <button className="price__filter" type="submit">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default MultiRangeSlider;
