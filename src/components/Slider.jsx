import React, { useState } from 'react';


const CustomRangeSlider = () => {
  const [value, setValue] = useState(12);
  const min = 0;
  const max = 18;
  const step = 3;
  
  // Calculate the percentage for active fill and dot position.
  const percent = ((value - min) / (max - min)) * 100;
  
  // Total markers: 0, 3, 6, …, 18.
  const markerCount = (max - min) / step + 1;

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-8 col-sm-10 col-12">
          <div className="range-item">
            <p className="text-light-black">Custom Input Range Slide</p>
            <div className="range-input d-flex position-relative">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                className="form-range"
                name="dataShared"
                onChange={handleChange}
              />
              <div className="range-line">
                <span 
                  className="active-line" 
                  style={{ width: `${percent}%` }}
                ></span>
              </div>
              <div className="dot-line">
                <span 
                  className="active-dot" 
                  style={{ left: `${percent}%` }}
                ></span>
              </div>
            </div>
            <ul className="list-inline list-unstyled">
              {Array.from({ length: markerCount }, (_, i) => {
                const markerValue = i * step;
                const isActive = i <= (value / step);
                return (
                  <li
                    key={i}
                    className={`list-inline-item ${isActive ? 'active' : ''}`}
                  >
                    <span>{markerValue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
