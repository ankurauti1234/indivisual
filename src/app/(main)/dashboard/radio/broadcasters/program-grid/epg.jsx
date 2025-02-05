"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { processedEpgData, timeToMinutes } from "./epg-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CustomRangeSlider from "./custom-range-slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgramDialog from "./program-dialog";
import DownloadDialog from "./download-dialog";

const MINUTES_IN_DAY = 24 * 60;
const FIXED_WIDTH = 9600;

const getUniqueChannels = (data) => {
  return [...new Set(data.map((item) => item.channel))];
};

const TimelineRuler = ({ timeRange }) => {
  const startHour = Math.floor(timeRange[0] / 60);
  const endHour = Math.ceil(timeRange[1] / 60);
  const hours = Array.from(
    { length: endHour - startHour },
    (_, i) => startHour + i
  );
  const minutesInRange = timeRange[1] - timeRange[0];
  const pixelsPerMinute = FIXED_WIDTH / minutesInRange;

  const isVeryZoomedIn = pixelsPerMinute > 15;
  const isZoomedIn = pixelsPerMinute > 8;
  const isSlightlyZoomedIn = pixelsPerMinute > 4;

  const formatMinute = (hour, minute) => {
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="h-12 relative border-y border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/30 dark:bg-zinc-800/30 backdrop-blur-xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.1)]">
      {hours.map((hour) => {
        const left = (hour * 60 - timeRange[0]) * pixelsPerMinute;
        return (
          <div key={hour} className="absolute" style={{ left: `${left}px` }}>
            <div className="absolute h-16 w-px bg-zinc-300/50 dark:bg-zinc-600/50" />
            <div className="absolute -left-8 top-1 w-16 text-center">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {formatMinute(hour, 0)}
              </span>
            </div>

            {Array.from({ length: 60 }, (_, minute) => {
              const isQuarter = minute % 15 === 0;
              const isFive = minute % 5 === 0;
              const minuteLeft = minute * pixelsPerMinute;

              if (minute === 0) return null;
              if (!isSlightlyZoomedIn && !isQuarter) return null;
              if (!isZoomedIn && !isQuarter && !isFive) return null;

              return (
                <div
                  key={minute}
                  className="absolute"
                  style={{ left: `${minuteLeft}px` }}
                >
                  <div
                    className={`absolute w-px transition-all ${
                      isQuarter
                        ? "h-12 bg-zinc-300/50 dark:bg-zinc-600/50"
                        : isFive
                        ? "h-8 bg-zinc-200/30 dark:bg-zinc-700/30"
                        : isVeryZoomedIn
                        ? "h-6 bg-zinc-200/20 dark:bg-zinc-700/20"
                        : ""
                    }`}
                  />

                  {((isVeryZoomedIn && minute % 1 === 0) ||
                    (isZoomedIn && isFive) ||
                    (isSlightlyZoomedIn && isQuarter)) && (
                    <div className="absolute -left-8 top-1 w-16 text-center">
                      <span
                        className={`text-xs ${
                          isQuarter
                            ? "text-zinc-600 dark:text-zinc-400"
                            : "text-zinc-500/70 dark:text-zinc-500/70"
                        }`}
                      >
                        {formatMinute(hour, minute)}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const EPG = () => {
  const [timeRange, setTimeRange] = useState([0, MINUTES_IN_DAY]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const channels = getUniqueChannels(processedEpgData);
  // const minutesInRange = timeRange[1] - timeRange[0];
  // const pixelsPerMinute = FIXED_WIDTH / minutesInRange;

  const minutesInRange = timeRange[1] - timeRange[0];
  const pixelsPerMinute = FIXED_WIDTH / minutesInRange;

  // Round up to the next full hour
  const adjustedEndTime = Math.ceil(timeRange[1] / 60) * 60;
  const dynamicWidth = (adjustedEndTime - timeRange[0]) * pixelsPerMinute;

  const filteredData = processedEpgData.filter(
    (program) => program.date === selectedDate
  );

  const handlePrevDate = () => {
    setSelectedDate((prevDate) => {
      const date = new Date(prevDate);
      date.setDate(date.getDate() - 1);
      return date.toISOString().split('T')[0];
    });
  };
  
  const handleNextDate = () => {
    setSelectedDate((prevDate) => {
      const date = new Date(prevDate);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    });
  };

  const toRadians = (deg) => (deg * Math.PI) / 180;

  const squircle = (cornerRadius) => (angle) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
  
    // Superellipse formula for smooth corners
    return {
      x: Math.sign(cos) * Math.pow(Math.abs(cos), 2 / cornerRadius),
      y: Math.sign(sin) * Math.pow(Math.abs(sin), 2 / cornerRadius),
    };
  };
  
  const squircleClipPath = (width, height, cornerRadius = 4) => {
    return new Array(360)
      .fill(0)
      .map((_, i) => i)
      .map(toRadians)
      .map(squircle(cornerRadius))
      .map(({ x, y }) => ({
        x: Math.round(((x * width) / 2 + width / 2) * 50) / 50, // Scale to width
        y: Math.round(((y * height) / 2 + height / 2) * 10) / 10, // Scale to height
      }))
      .map(({ x, y }) => `${x}px ${y}px`)
      .join(", ");
  };
  
  
  
  

  const renderProgramBlock = (program, timeRange) => {
    const startMinutes = timeToMinutes(program.start);
    const endMinutes = timeToMinutes(program.end);
  
    // Only render if the program intersects with the current time range
    if (endMinutes <= timeRange[0] || startMinutes >= timeRange[1]) {
      return null;
    }
  
    const visibleStart = Math.max(startMinutes, timeRange[0]);
    const visibleEnd = Math.min(endMinutes, timeRange[1]);
    const width = (visibleEnd - visibleStart) * pixelsPerMinute;
    const left = (visibleStart - timeRange[0]) * pixelsPerMinute;
  
  // Distinguish between different program types
  const isProgramType = program.type === "song";
  const isNotDetectedType = program.type === "not detected";
  const isAdType = program.type === "ad";
  
  const isVeryNarrow = width < 80;
  const isNarrow = width < 120;
  const duration = endMinutes - startMinutes;
  const durationText = `${Math.floor(duration / 60)}h ${duration % 60}m`;

  return (
    <motion.div
      key={program.id}
      className={`absolute h-28 overflow-hidden transition-all duration-300 cursor-pointer
        ${
          isNotDetectedType
            ? "bg-zinc-300 dark:bg-zinc-700"  // Gray color for not detected
            : isProgramType
            ? "bg-blue-200 dark:bg-popover dark:to-card"
            : "bg-rose-300 dark:bg-rose-900 dark:to-card"
        }
        ${isVeryNarrow ? "rounded-lg" : "rounded-xl"}
        shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.5)] 
        dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.05)]
        border border-white/20 dark:border-zinc-800
        hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] 
        dark:hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]
        hover:translate-y-[-1px]
        group`}
      style={{
        left: `${left}px`,
        width: `${width}px`
      }}
      // Remove onClick for not detected types
      onClick={isNotDetectedType ? undefined : () => setSelectedProgram(program)}
    >
      <div
        className={`relative h-full flex flex-col justify-between 
        ${isVeryNarrow ? "p-1" : isNarrow ? "p-1.5" : "p-2.5"}`}
      >
        <div className="space-y-1.5">
          {!isVeryNarrow && (
            <h3
              className={`font-medium text-sm leading-tight line-clamp-2 group-hover:line-clamp-none
              ${
                isNotDetectedType
                  ? "text-zinc-600 dark:text-zinc-300"
                  : isProgramType
                  ? "text-zinc-800 dark:text-zinc-200"
                  : "text-red-800 dark:text-red-200"
              }`}
            >
              {program.program}
            </h3>
          )}
            {isVeryNarrow && (
              <div className="tooltip-container">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-lg">•</span>
                </div>
                <div
                  className="absolute hidden group-hover:block z-30 bg-white/90 dark:bg-zinc-800/90 
                  shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]
                  dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]
                  rounded-lg p-2 -left-2 top-8 w-48 border border-white/20 dark:border-zinc-700/50
                  backdrop-blur-xl"
                >
                  <p className="text-sm text-zinc-900 dark:text-zinc-100">
                    {program.program}
                  </p>
                </div>
              </div>
            )}

            <div
              className={`flex items-center gap-1.5 
              ${isVeryNarrow ? "flex-col items-start gap-0.5" : "flex-row"}`}
            >
              <div
                className={`text-xs px-2 py-0.5 rounded-full 
                ${
                  isProgramType
                    ? "bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 shadow-[1px_1px_2px_rgba(0,0,0,0.05),-1px_-1px_2px_rgba(255,255,255,0.5)]"
                    : "bg-red-100/80 dark:bg-red-900/30 text-red-800 dark:text-red-200 shadow-[1px_1px_2px_rgba(0,0,0,0.05),-1px_-1px_2px_rgba(255,255,255,0.5)]"
                }`}
              >
                {`${program.start} - ${program.end}`}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="h-[85vh] flex flex-col rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-xl
      shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]
      dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.1)]
      border p-2 "
    >
      <header className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Radio Program Guide
          </h1>
          <div className="flex items-center gap-4">

          <DownloadDialog channels={channels} epgData={processedEpgData} />
          <div
            className="flex items-center justify-between gap-4 w-96 bg-white/50 dark:bg-zinc-800/50 rounded-xl p-2
            shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]
            dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]"
          >
            <Button
              onClick={handlePrevDate}
              size="icon"
              className="bg-white/80 dark:bg-zinc-900/80 shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.5)]
                dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.05)]
                hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]
                dark:hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <span className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
  {new Date(selectedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</span>
            <Button
              onClick={handleNextDate}
              size="icon"
              className="bg-white/80 dark:bg-zinc-900/80 shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.5)]
                dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.05)]
                hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]
                dark:hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          </div>
        </div>

        <CustomRangeSlider
          min={0}
          max={MINUTES_IN_DAY}
          step={1}
          value={timeRange}
          onChange={setTimeRange}
        />
      </header>

      <ProgramDialog
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
      />

      <div className="flex flex-1 overflow-hidden rounded-xl border">
        <div className="w-48 flex-shrink-0 border-r ">
          <div
            className="h-12 flex items-center justify-center bg-zinc-100/30 dark:bg-zinc-800/30 backdrop-blur-xl 
            border-y
            shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.1)] border-zinc-200/50 dark:border-zinc-800/50 rounded-tl-lg"
          ></div>
          {channels.map((channel, index) => (
            <div
              key={index}
              className="h-32 mb-px bg-muted/75 backdrop-blur-sm flex items-center px-4 
                  transition-colors
                shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-1px_-1px_2px_rgba(0,0,0,0.1)]"
         
            >
              <img
                src={`/images/${channel
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-")}.png`}
                alt={channel.toLowerCase().trim().replace(/\s+/g, "-") + ".png"}
                className="h-16 w-16 mr-2 shadow-lg "
                style={{
                  clipPath: `polygon(${squircleClipPath(64, 64, 4)})`, // Adjust radius for smoothness
                }}
              />

              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {channel}
              </span>
            </div>
          ))}
        </div>

        <ScrollArea className="flex-1">
        <div
          className="relative"
          style={{
            width: `${dynamicWidth}px`, // Use adjusted dynamic width
            height: `${channels.length * 112}px`,
          }}
        >
          <TimelineRuler timeRange={timeRange} />
          {channels.map((channel, channelIndex) => {
            const channelPrograms = filteredData
              .filter((p) => p.channel === channel)
              .filter((program) => {
                const startMinutes = timeToMinutes(program.start);
                const endMinutes = timeToMinutes(program.end);
                return !(endMinutes <= timeRange[0] || startMinutes >= timeRange[1]);
              });

            return (
              <div
                key={channel}
                className="absolute left-0 right-0 bg-white/20 dark:bg-zinc-800/20 py-2"
                style={{
                  top: `${channelIndex * 130 + 48}px`,
                  height: "130px",
                }}
              >
                {channelPrograms.map((program) =>
                  renderProgramBlock(program, timeRange)
                )}
              </div>
            );
          })}
        </div>
        <ScrollBar
          orientation="horizontal"
          className="bg-white/50 dark:bg-zinc-800/50 cursor-pointer
            shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]
            dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]"
        />
      </ScrollArea>
      </div>
    </div>
  );
};

export default EPG;
