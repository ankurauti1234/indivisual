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
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
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
    <div className="w-full px-4 py-8">
      <div className="relative h-20">
        {/* Track Background */}
        <div className="absolute h-8 w-full bg-zinc-100 dark:bg-zinc-800 rounded top-0 border border-zinc-200 dark:border-zinc-700 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(0,0,0,0.1)] dark:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.1),inset_2px_2px_5px_rgba(0,0,0,0.3)]"  />

        {/* Selected Range */}
        <div
          className="absolute h-8 bg-gradient-to-r from-blue-200/80 to-purple-200/80 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-sm top-0 transition-all duration-300 ease-out shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.5)] dark:shadow-[2px_2px_5px_rgba(0,0,0,0.3),-2px_-2px_5px_rgba(255,255,255,0.1)]"
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
              className="absolute transform"
              style={{ left: `${calculatePosition(tick)}%` }}
            >
              <div className="h-3 w-0.5 bg-zinc-200 dark:bg-zinc-700 mb-1" />
              <span className="text-xs text-zinc-500 dark:text-zinc-400 -ml-3">
                {formatTime(tick)}
              </span>
            </div>
          ))}
        </div>

        {/* Current Values Display */}
        <div className="absolute w-full flex justify-between left-0 -top-12">
          <div className="relative group">
            <div className="text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-600">
              <span className="text-zinc-900 dark:text-zinc-100">
                {formatTime(leftValue)}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                start
              </span>
            </div>
          </div>
          <div className="relative group">
            <div className="text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-600">
              <span className="text-zinc-900 dark:text-zinc-100">
                {formatTime(rightValue)}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                end
              </span>
            </div>
          </div>
        </div>

        {/* Left Thumb Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={leftValue}
          onChange={handleLeftChange}
          className="absolute w-full top-2 h-4 appearance-none bg-transparent pointer-events-none slider-custom"
          style={{
            "--thumb-size": "30px",
            "--thumb-color": "white",
            "--thumb-border": "2px solid rgb(var(--primary))",
            "--thumb-shadow": "0 2px 4px rgba(0,0,0,0.1)",
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
          className="absolute w-full top-2 h-4 appearance-none bg-transparent pointer-events-none slider-custom"
          style={{
            "--thumb-size": "30px",
            "--thumb-color": "white",
            "--thumb-border": "2px solid rgb(var(--primary))",
            "--thumb-shadow": "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <style jsx>{`
        .slider-custom {
          -webkit-appearance: none;
        }

        .slider-custom::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 3rem;
          width: 1rem;
          border-radius: 4px;
          background: var(--thumb-color);
          border: var(--thumb-border);
          box-shadow: var(--thumb-shadow);
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .slider-custom::-moz-range-thumb {
          height: 3rem;
          width: 1rem;
          border-radius: 4px;
          background: var(--thumb-color);
          border: var(--thumb-border);
          box-shadow: var(--thumb-shadow);
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slider-custom::-moz-range-thumb:hover {
          transform: scale(1.1);
        }

      `}</style>
    </div>
  );
};

export default CustomRangeSlider;
