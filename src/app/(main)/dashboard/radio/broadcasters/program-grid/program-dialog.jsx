"use client";
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const ProgramDialog = ({ selectedProgram, setSelectedProgram }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimeChange = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <Dialog
      open={!!selectedProgram}
      onOpenChange={() => setSelectedProgram(null)}
    >
      <DialogContent className="max-w-xl backdrop-blur-xl border rounded-2xl bg-white/80 dark:bg-zinc-900/80 p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl flex font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            <img
              src={`/images/${selectedProgram?.channel
                ?.toLowerCase()
                .trim()
                .replace(/\s+/g, "-")}.png`}
              alt={
                selectedProgram?.channel
                  ?.toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-") + ".png"
              }
              className="h-16 w-16 ios-radius mr-2 shadow"
            />

            <h1 className="flex flex-col gap-2">
              {selectedProgram?.program}
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                ({selectedProgram?.channel})
              </span>
            </h1>
          </DialogTitle>
        </DialogHeader>

        {/* Program Details */}
        <div className="space-y-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-800/60 shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="text-sm font-medium uppercase tracking-wide">
                  Station
                </span>
                <span className="block text-lg font-semibold mt-1">
                  {selectedProgram?.channel}
                </span>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="text-sm font-medium uppercase tracking-wide">
                  Date
                </span>
                <span className="block text-lg font-semibold mt-1">
                  {selectedProgram?.date}
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="text-sm font-medium uppercase tracking-wide">
                  Time
                </span>
                <span className="block text-lg font-semibold mt-1">
                  {selectedProgram?.start} - {selectedProgram?.end}
                </span>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                <span className="text-sm font-medium uppercase tracking-wide">
                  Type
                </span>
                <span className="block text-lg font-semibold mt-1 capitalize">
                  {selectedProgram?.type}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Audio Player Box */}
        <div className="mt-6 p-4 rounded-xl bg-white/60 dark:bg-zinc-800/60 shadow-md">
          <audio
            ref={audioRef}
            src={selectedProgram?.audio}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
            className="hidden"
          />

          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleTimeChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
              ) : (
                <Play className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
              )}
            </button>
            <div className="flex items-center gap-2 w-32">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                ) : (
                  <Volume2 className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                )}
              </button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.1}
                onValueChange={handleVolumeChange}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDialog;
