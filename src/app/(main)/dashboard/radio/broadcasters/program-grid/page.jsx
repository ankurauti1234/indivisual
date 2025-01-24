"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { processedEpgData } from "./epg-data";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MINUTES_IN_DAY = 24 * 60;
const PIXEL_PER_MINUTE = 4;
const TOTAL_WIDTH = MINUTES_IN_DAY * PIXEL_PER_MINUTE;

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

const EPG = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [timeRange, setTimeRange] = useState([0, MINUTES_IN_DAY]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const scrollRef = useRef(null);
  const channels = getUniqueChannels(processedEpgData);

  const renderProgramBlock = (program, timeRange) => {
    const startMinutes = timeToMinutes(program.start);
    const endMinutes = timeToMinutes(program.end);

    const visibleStart = Math.max(startMinutes, timeRange[0]);
    const visibleEnd = Math.min(endMinutes, timeRange[1]);

    const width = (visibleEnd - visibleStart) * PIXEL_PER_MINUTE;
    const left = visibleStart * PIXEL_PER_MINUTE;

    return (
      <motion.div
        key={program.id}
        className={`absolute h-32 rounded-3xl border-2 shadow-inner overflow-hidden transition-all duration-300 cursor-pointer
        ${
          program.type === "program"
            ? "bg-popover text-primary-foreground p-2 hover:bg-primary/45"
            : "bg-red-400 text-destructive-foreground p-0 hover:bg-destructive"
        }`}
        style={{
          left: `${left}px`,
          width: `${width}px`,
        }}
        whileHover={{
          zIndex: 20,
          // scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setSelectedProgram(program)}
      >
        <div className="text-lg font-medium line-clamp-2 text-foreground">
          {program.program}
          <div className="bg-secondary/25 text-foreground shadow-lg w-fit text-sm rounded-lg p-1">
            <span>{program.start} </span>-<span> {program.end}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="h-[80vh] flex flex-col rounded-lg border-2">
      {/* Existing header and slider code remains the same */}
      <header className="flex flex-col justify-between items-center backdrop-blur-md rounded-lg gap-4">
        <h1 className="text-2xl font-semibold text-foreground text-start">
          TV Guide
        </h1>
        <p className="text-lg font-medium">
          Time Range: {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
        </p>
        <div className="w-full px-12 bg-primary/15 py-4">
          <Slider
            className=""
            defaultValue={[0, MINUTES_IN_DAY]}
            max={MINUTES_IN_DAY}
            step={5}
            onValueChange={(value) => setTimeRange(value)}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{formatTime(timeRange[0])}</span>
            <span>{formatTime(timeRange[1])}</span>
          </div>
        </div>
      </header>

      {/* Program Details Dialog */}
      <Dialog
        open={!!selectedProgram}
        onOpenChange={() => setSelectedProgram(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProgram?.program}</DialogTitle>
            <DialogDescription>
              <div className="space-y-2">
                <p>
                  <strong>Channel:</strong> {selectedProgram?.channel}
                </p>
                <p>
                  <strong>Time:</strong> {selectedProgram?.start} -{" "}
                  {selectedProgram?.end}
                </p>
                <p>
                  <strong>Type:</strong> {selectedProgram?.type}
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Existing ScrollArea and channel rendering code remains the same */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-48 flex-shrink-0 border-r border-border/20">
          <div className="h-8 flex items-center text-center justify-center bg-gray-400/25 border">
            {" "}
          </div>
          {channels.map((channel, index) => (
            <div
              key={index}
              className="h-32 mb-1 bg-card border-2 shadow-inner rounded-lg flex items-center px-4 border-b border-border/20 hover:bg-secondary/10 transition-colors"
            >
              <span className="text-sm font-medium">{channel}</span>
            </div>
          ))}
        </div>
        <ScrollArea className="flex-1">
          <div
            className="relative"
            style={{
              width: `${TOTAL_WIDTH}px`,
              height: `${channels.length * 64}px`,
            }}
          >
            {/* Rest of the existing code for rendering time and channel programs */}
            <div className="absolute top-0 left-0 right-0 h-8 backdrop-blur-md z-10 flex border border-x-0 bg-gray-400/25">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r flex items-center justify-center"
                  style={{
                    opacity:
                      i * 60 >= timeRange[0] && i * 60 <= timeRange[1]
                        ? 1
                        : 0.3,
                  }}
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {formatTime(i * 60)}
                  </span>
                </div>
              ))}
            </div>
            {channels.map((channel, channelIndex) => {
              const channelPrograms = processedEpgData.filter(
                (p) => p.channel === channel
              );
              return (
                <div
                  key={channel}
                  className="absolute left-0 right-0 bg-card shadow-inner hover:bg-primary/15"
                  style={{
                    top: `${channelIndex * (128 + 4) + 32}px`,
                    height: "128px",
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
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default EPG;
