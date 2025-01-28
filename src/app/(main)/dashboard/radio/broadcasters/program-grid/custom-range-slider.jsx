import React, { useState, useEffect, useRef } from "react";

const CustomRangeSlider = ({ min, max, step, value, onChange }) => {
  const [leftValue, setLeftValue] = useState(value[0]);
  const [rightValue, setRightValue] = useState(value[1]);
  const rangeRef = useRef(null);

  // Generate tick marks
  const totalSteps = Math.floor((max - min) / 60); // One tick per hour
  const ticks = Array.from({ length: totalSteps + 1 }, (_, i) => i * 60);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, "0")}:00`;
  };

  const calculatePosition = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  const handleLeftChange = (e) => {
    const newValue = Math.min(Number(e.target.value), rightValue - step);
    setLeftValue(newValue);
    onChange([newValue, rightValue]);
  };

  const handleRightChange = (e) => {
    const newValue = Math.max(Number(e.target.value), leftValue + step);
    setRightValue(newValue);
    onChange([leftValue, newValue]);
  };

  useEffect(() => {
    setLeftValue(value[0]);
    setRightValue(value[1]);
  }, [value]);

  return (
    <div className="w-full px-4 py-6">
      <div className="relative h-16">
        {/* Track Background */}
        <div className="absolute h-2 w-full bg-card rounded-full top-0 border" />

        {/* Selected Range */}
        <div
          className="absolute h-2 bg-primary/45 rounded-full top-0"
          style={{
            left: `${calculatePosition(leftValue)}%`,
            width: `${
              calculatePosition(rightValue) - calculatePosition(leftValue)
            }%`,
          }}
        />

        {/* Tick Marks */}
        <div className="absolute w-full top-4 pt-2">
          {ticks.map((tick) => (
            <div
              key={tick}
              className="absolute transform "
              style={{ left: `${calculatePosition(tick)}%` }}
            >
              <div className="h-3 w-0.5 bg-gray-300 mb-1" />
              <span className="text-xs text-gray-500 -ml-3">
                {formatTime(tick)}
              </span>
            </div>
          ))}
        </div>

        {/* Left Thumb Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={leftValue}
          onChange={handleLeftChange}
          className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-none"
          style={{
            "--thumb-size": "24px",
            "--thumb-color": "white",
            "--thumb-border": "2px solid #B19EF7",
          }}
        />

        {/* Right Thumb Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={rightValue}
          onChange={handleRightChange}
          className="absolute w-full top-0 h-2 appearance-none bg-transparent pointer-events-none"
          style={{
            "--thumb-size": "24px",
            "--thumb-color": "white",
            "--thumb-border": "2px solid #B19EF7",
          }}
        />

        {/* Current Values Display */}
        <div className="absolute w-full flex justify-between left-0 -top-10 ">
          <div className="text-sm font-medium bg-blue-100 border dark:bg-gray-800 px-2 py-1 rounded-full">
            {formatTime(leftValue)}
          </div>
          <div className="text-sm font-medium bg-blue-100 border dark:bg-gray-800  px-2 py-1 rounded-full">
            {formatTime(rightValue)}
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 50%;
          background: var(--thumb-color);
          border: var(--thumb-border);
          pointer-events: auto;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 50%;
          background: var(--thumb-color);
          border: var(--thumb-border);
          pointer-events: auto;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CustomRangeSlider;
