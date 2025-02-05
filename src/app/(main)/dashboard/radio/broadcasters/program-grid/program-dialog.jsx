"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProgramDialog = ({ selectedProgram, setSelectedProgram }) => {
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
          <iframe
            src={selectedProgram?.audio}
            width="100%"
            height="100"
            allow="autoplay"
            title={`${selectedProgram?.program} Audio Player`}
            className="w-full rounded-lg"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramDialog;