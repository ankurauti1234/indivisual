"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { processedEpgData } from "./epg-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CustomRangeSlider from "./custom-range-slider";

const MINUTES_IN_DAY = 24 * 60;
const FIXED_WIDTH = 9600; // Fixed width for the program section

const timeToMinutes = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
};

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
};

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

  return (
    <div className="h-12 relative border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-xl">
      {hours.map((hour) => {
        const left = (hour * 60 - timeRange[0]) * pixelsPerMinute;
        return (
          <div key={hour} className="absolute" style={{ left: `${left}px` }}>
            <div className="absolute h-12 w-px bg-zinc-300 dark:bg-zinc-600" />
            <div className="absolute -left-8 top-1 w-16 text-center">
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {hour.toString().padStart(2, "0")}:00
              </span>
            </div>

            {/* 30-minute marker */}
            {hour < endHour && (
              <div
                className="absolute"
                style={{ left: `${30 * pixelsPerMinute}px` }}
              >
                <div className="absolute h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
                <div className="absolute -left-8 top-1 w-16 text-center">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {hour.toString().padStart(2, "0")}:30
                  </span>
                </div>
              </div>
            )}

            {/* 15-minute markers */}
            {[15, 45].map((minutes) => (
              <div
                key={minutes}
                className="absolute"
                style={{ left: `${minutes * pixelsPerMinute}px` }}
              >
                <div className="absolute h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
              </div>
            ))}

            {/* 5-minute markers */}
            {Array.from({ length: 11 }, (_, i) => i * 5).map((minutes) => {
              if (minutes % 15 !== 0) {
                return (
                  <div
                    key={minutes}
                    className="absolute"
                    style={{ left: `${minutes * pixelsPerMinute}px` }}
                  >
                    <div className="absolute h-4 w-px bg-zinc-100 dark:bg-zinc-700/50" />
                  </div>
                );
              }
              return null;
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
  const channels = getUniqueChannels(processedEpgData);
  const minutesInRange = timeRange[1] - timeRange[0];
  const pixelsPerMinute = FIXED_WIDTH / minutesInRange;

  const renderProgramBlock = (program, timeRange) => {
    const startMinutes = timeToMinutes(program.start);
    const endMinutes = timeToMinutes(program.end);
    const visibleStart = Math.max(startMinutes, timeRange[0]);
    const visibleEnd = Math.min(endMinutes, timeRange[1]);
    const width = (visibleEnd - visibleStart) * pixelsPerMinute;
    const left = (visibleStart - timeRange[0]) * pixelsPerMinute;

    const isProgramType = program.type === "program";

    return (
      <motion.div
        key={program.id}
        className={`absolute h-28 overflow-hidden transition-all duration-300 cursor-pointer
          ${
            isProgramType
              ? "bg-sky-50 dark:bg-zinc-800/90 backdrop-blur-lg rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-sky-100 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:outline outline-1 outline-ring/25 hover:rounded-none transition-all duration-300"
              : "bg-red-500/90 dark:bg-red-600/90 backdrop-blur-lg rounded-2xl"
          }`}
        style={{
          left: `${left}px`,
          width: `${width}px`,
        }}
        whileHover={{
          zIndex: 20,
        }}
        whileTap={{
          scale: 0.98,
          transition: { type: "spring", stiffness: 800, damping: 10 },
        }}
        onClick={() => setSelectedProgram(program)}
      >
        <div className="p-3 h-full flex flex-col justify-between">
          <div className="space-y-1">
            <h3
              className={`font-medium text-sm line-clamp-2 ${
                isProgramType
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-white"
              }`}
            >
              {program.program}
            </h3>
            <div
              className={`text-xs px-2 py-1 rounded-full w-fit ${
                isProgramType
                  ? "bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                  : "bg-red-400 dark:bg-red-500 text-white"
              }`}
            >
              {program.start} - {program.end}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="h-[85vh] flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl">
      <header className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          TV Guide
        </h1>
        <CustomRangeSlider
          min={0}
          max={MINUTES_IN_DAY}
          step={5}
          value={timeRange}
          onChange={setTimeRange}
        />
      </header>

      <Dialog
        open={!!selectedProgram}
        onOpenChange={() => setSelectedProgram(null)}
      >
        <DialogContent className="sm:max-w-[425px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {selectedProgram?.program}
            </DialogTitle>
            <DialogDescription className="space-y-4 text-zinc-600 dark:text-zinc-300">
              <div className="space-y-2 mt-4">
                <p className="flex justify-between">
                  <span>Channel</span>
                  <span className="font-medium">
                    {selectedProgram?.channel}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Time</span>
                  <span className="font-medium">
                    {selectedProgram?.start} - {selectedProgram?.end}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Type</span>
                  <span className="font-medium capitalize">
                    {selectedProgram?.type}
                  </span>
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-48 flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800">
          <div className="h-12 flex items-center justify-center bg-zinc-100/50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800"></div>
          {channels.map((channel, index) => (
            <div
              key={index}
              className="h-28 mb-px bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {channel}
              </span>
            </div>
          ))}
        </div>

        <ScrollArea className="flex-1">
          <div
            className="relative"
            style={{
              width: `${FIXED_WIDTH}px`,
              height: `${channels.length * 112}px`,
            }}
          >
            <TimelineRuler timeRange={timeRange} />
            {channels.map((channel, channelIndex) => {
              const channelPrograms = processedEpgData.filter(
                (p) => p.channel === channel
              );
              return (
                <div
                  key={channel}
                  className="absolute left-0 right-0 transition-colors"
                  style={{
                    top: `${channelIndex * 112 + 48}px`,
                    height: "112px",
                  }}
                >
                  {channelPrograms
                    .filter((program) => {
                      const startMinutes = timeToMinutes(program.start);
                      const endMinutes = timeToMinutes(program.end);
                      return (
                        startMinutes <= timeRange[1] &&
                        endMinutes >= timeRange[0]
                      );
                    })
                    .map((program) => renderProgramBlock(program, timeRange))}
                </div>
              );
            })}
          </div>
          <ScrollBar
            orientation="horizontal"
            className="bg-zinc-50 dark:bg-zinc-900 cursor-pointer"
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default EPG;
