"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { processedEpgData, timeToMinutes } from "./epg-data"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import CustomRangeSlider from "./custom-range-slider"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const MINUTES_IN_DAY = 24 * 60
const FIXED_WIDTH = 9600 // Fixed width for the program section

const getUniqueChannels = (data) => {
  return [...new Set(data.map((item) => item.channel))]
}

const TimelineRuler = ({ timeRange }) => {
  const startHour = Math.floor(timeRange[0] / 60)
  const endHour = Math.ceil(timeRange[1] / 60)
  const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i)
  const minutesInRange = timeRange[1] - timeRange[0]
  const pixelsPerMinute = FIXED_WIDTH / minutesInRange

  // More conservative zoom thresholds to prevent clutter
  const isVeryZoomedIn = pixelsPerMinute > 15 // Show individual minutes
  const isZoomedIn = pixelsPerMinute > 8 // Show 5-minute intervals
  const isSlightlyZoomedIn = pixelsPerMinute > 4 // Show 15-minute intervals

  const formatMinute = (hour, minute) => {
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  }

  return (
    <div className="h-16 relative border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-xl">
      {hours.map((hour) => {
        const left = (hour * 60 - timeRange[0]) * pixelsPerMinute
        return (
          <div key={hour} className="absolute" style={{ left: `${left}px` }}>
            {/* Hour marker */}
            <div className="absolute h-16 w-px bg-zinc-300 dark:bg-zinc-600" />
            <div className="absolute -left-8 top-1 w-16 text-center">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{formatMinute(hour, 0)}</span>
            </div>

            {/* Generate minute markers based on zoom level */}
            {Array.from({ length: 60 }, (_, minute) => {
              const isQuarter = minute % 15 === 0
              const isFive = minute % 5 === 0
              const minuteLeft = minute * pixelsPerMinute

              if (minute === 0) return null // Skip 0 as it's the hour marker

              // Only render markers based on zoom level
              if (!isSlightlyZoomedIn && !isQuarter) return null
              if (!isZoomedIn && !isQuarter && !isFive) return null

              return (
                <div key={minute} className="absolute" style={{ left: `${minuteLeft}px` }}>
                  {/* Minute marker line */}
                  <div
                    className={`absolute w-px transition-all ${
                      isQuarter
                        ? "h-12 bg-zinc-300 dark:bg-zinc-600"
                        : isFive
                          ? "h-8 bg-zinc-200 dark:bg-zinc-700"
                          : isVeryZoomedIn
                            ? "h-6 bg-zinc-200/70 dark:bg-zinc-700/50"
                            : ""
                    }`}
                  />

                  {/* Time labels */}
                  {((isVeryZoomedIn && minute % 1 === 0) ||
                    (isZoomedIn && isFive) ||
                    (isSlightlyZoomedIn && isQuarter)) && (
                    <div className="absolute -left-8 top-1 w-16 text-center">
                      <span
                        className={`text-xs ${
                          isQuarter ? "text-zinc-600 dark:text-zinc-400" : "text-zinc-500 dark:text-zinc-500"
                        }`}
                      >
                        {formatMinute(hour, minute)}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const EPG = () => {
  const [timeRange, setTimeRange] = useState([0, MINUTES_IN_DAY])
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [selectedDate, setSelectedDate] = useState("2025-01-29")
  const channels = getUniqueChannels(processedEpgData)
  const minutesInRange = timeRange[1] - timeRange[0]
  const pixelsPerMinute = FIXED_WIDTH / minutesInRange

  const filteredData = processedEpgData.filter((program) => program.date === selectedDate)

  const handlePrevDate = () => {
    setSelectedDate((prevDate) => {
      const date = new Date(prevDate)
      date.setDate(date.getDate() - 1)
      return date.toISOString().split("T")[0]
    })
  }

  const handleNextDate = () => {
    setSelectedDate((prevDate) => {
      const date = new Date(prevDate)
      date.setDate(date.getDate() + 1)
      return date.toISOString().split("T")[0]
    })
  }

  const renderProgramBlock = (program, timeRange) => {
    const startMinutes = timeToMinutes(program.start)
    const endMinutes = timeToMinutes(program.end)
    const visibleStart = Math.max(startMinutes, timeRange[0])
    const visibleEnd = Math.min(endMinutes, timeRange[1])
    const width = (visibleEnd - visibleStart) * pixelsPerMinute
    const left = (visibleStart - timeRange[0]) * pixelsPerMinute
    const isProgramType = program.type === "program"

    // Calculate if the block is very narrow
    const isVeryNarrow = width < 80
    const isNarrow = width < 120

    // Duration in minutes
    const duration = endMinutes - startMinutes
    const durationText = `${Math.floor(duration / 60)}h ${duration % 60}m`

    return (
      <motion.div
        key={program.id}
        className={`absolute h-28 overflow-hidden transition-all duration-300 cursor-pointer
          ${
            isProgramType
              ? "bg-gradient-to-br from-sky-50 to-sky-100/90 dark:from-zinc-800/90 dark:to-zinc-800/80 backdrop-blur-lg"
              : "bg-gradient-to-br from-red-500/90 to-red-600/80 dark:from-red-600/90 dark:to-red-700/80 backdrop-blur-lg"
          }
          ${isVeryNarrow ? "rounded-lg" : "rounded-2xl"}
          border-[0.5px] border-black/5 dark:border-white/5
          hover:shadow-[0_8px_16px_rgb(0_0_0_/_0.1)] dark:hover:shadow-[0_8px_16px_rgb(0_0_0_/_0.3)]
          hover:outline outline-1 outline-sky-500/20 dark:outline-sky-400/20
          group`}
        style={{
          left: `${left}px`,
          width: `${width}px`,
        }}
        whileHover={{
          zIndex: 20,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        whileTap={{
          scale: 0.98,
          transition: { type: "spring", stiffness: 800, damping: 10 },
        }}
        onClick={() => setSelectedProgram(program)}
      >
        <div
          className={`relative h-full flex flex-col justify-between p-2 
          ${isVeryNarrow ? "p-1" : isNarrow ? "p-1.5" : "p-2.5"}`}
        >
          {/* Content Container */}
          <div className="space-y-1.5">
            {/* Title */}
            <div className="relative">
              {!isVeryNarrow && (
                <h3
                  className={`font-medium text-sm leading-tight line-clamp-2 group-hover:line-clamp-none
                  ${isProgramType ? "text-zinc-900 dark:text-zinc-100" : "text-white"}`}
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
                    className="absolute hidden group-hover:block z-30 bg-white dark:bg-zinc-800 
                    shadow-lg rounded-lg p-2 -left-2 top-8 w-48 border border-zinc-200 dark:border-zinc-700"
                  >
                    <p className="text-sm text-zinc-900 dark:text-zinc-100">{program.program}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Time Badge */}
            <div
              className={`flex items-center gap-1.5 
              ${isVeryNarrow ? "flex-col items-start gap-0.5" : "flex-row"}`}
            >
              <div
                className={`text-xs px-2 py-0.5 rounded-full 
                ${
                  isProgramType
                    ? "bg-sky-100 dark:bg-zinc-700 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-500/30"
                    : "bg-red-400 dark:bg-red-500/50 text-white border border-red-300/50 dark:border-red-400/30"
                }`}
              >
                {isNarrow ? durationText : `${program.start} - ${program.end}`}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="h-[85vh] flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl">
      <header className="p-6 space-y-6">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Radio Program Guide</h1>
        <div className="flex items-center justify-between gap-4  w-96 bg-muted rounded-lg">
          <Button onClick={handlePrevDate} size="icon" variant="outline" >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <span className="text-lg font-medium">
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Button onClick={handleNextDate} size="icon" variant="outline" >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        </div>

        <CustomRangeSlider min={0} max={MINUTES_IN_DAY} step={5} value={timeRange} onChange={setTimeRange} />
      </header>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="sm:max-w-[425px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {selectedProgram?.program}
            </DialogTitle>
            <DialogDescription className="space-y-4 text-zinc-600 dark:text-zinc-300">
              <div className="space-y-2 mt-4">
                <p className="flex justify-between">
                  <span>Channel</span>
                  <span className="font-medium">{selectedProgram?.channel}</span>
                </p>
                <p className="flex justify-between">
                  <span>Date</span>
                  <span className="font-medium">{selectedProgram?.date}</span>
                </p>
                <p className="flex justify-between">
                  <span>Time</span>
                  <span className="font-medium">
                    {selectedProgram?.start} - {selectedProgram?.end}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>Type</span>
                  <span className="font-medium capitalize">{selectedProgram?.type}</span>
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
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{channel}</span>
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
              const channelPrograms = filteredData.filter((p) => p.channel === channel)
              return (
                <div
                  key={channel}
                  className="absolute left-0 right-0 transition-colors"
                  style={{
                    top: `${channelIndex * 112 + 48}px`,
                    height: "112px",
                  }}
                >
                  {channelPrograms.map((program) => renderProgramBlock(program, timeRange))}
                </div>
              )
            })}
          </div>
          <ScrollBar orientation="horizontal" className="bg-zinc-50 dark:bg-zinc-900 cursor-pointer" />
        </ScrollArea>
      </div>
    </div>
  )
}

export default EPG

