import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CalendarIcon, Download, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const DownloadDialog = ({ channels, epgData }) => {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [open, setOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const validateTimeInput = (time) => {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  };

  const handleStartTimeChange = (e) => {
    const newTime = e.target.value;
    if (validateTimeInput(newTime)) {
      if (newTime < endTime) {
        setStartTime(newTime);
      } else {
        setStartTime(endTime);
      }
    }
  };

  const handleEndTimeChange = (e) => {
    const newTime = e.target.value;
    if (validateTimeInput(newTime)) {
      if (newTime > startTime) {
        setEndTime(newTime);
      } else {
        setEndTime(startTime);
      }
    }
  };

  const handleDateSelect = (selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setCalendarOpen(false);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const filteredData = epgData.filter((program) => {
        const programDate = new Date(program.date);
        const isSelectedDate =
          programDate.toISOString().split("T")[0] ===
          date.toISOString().split("T")[0];
        const isSelectedChannel =
          selectedChannels.includes(program.channel) ||
          selectedChannels.includes("all");
        const programStartTime = program.start.substring(0, 5);
        const programEndTime = program.end.substring(0, 5);
        const isInTimeRange =
          programStartTime >= startTime && programEndTime <= endTime;

        return isSelectedDate && isSelectedChannel && isInTimeRange;
      });

      const csvContent = [
        ["Channel", "Date", "Start", "End", "Type", "Program Name"].join(","),
        ...filteredData.map((program) =>
          [
            program.channel,
            program.date,
            program.start,
            program.end,
            program.type,
            `"${program.program}"`,
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${
        fileName || `epg-data-${date.toISOString().split("T")[0]}`
      }.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download Complete",
        description: "Your EPG data has been successfully exported.",
      });

      setTimeout(() => {
        setOpen(false);
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error exporting your EPG data.",
        variant: "destructive",
      });
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Download className="h-4 w-4" />  
          Export
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] p-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-0 shadow-2xl">
        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">
              Export EPG Data
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  className={"bg-card w-fit rounded-lg"}
                />

                
              </div>

              {/* Rest of the component remains the same */}
              <div className="flex-1 gap-6">
                <div className="space-y-2 w-full">
                  <Label className="text-sm font-medium">Start Time</Label>
                  <Input
                    type="time"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    className="rounded-xl h-12 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800
                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2 w-full">
                  <Label className="text-sm font-medium">End Time</Label>
                  <Input
                    type="time"
                    value={endTime}
                    onChange={handleEndTimeChange}
                    className="rounded-xl h-12 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800
                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">File Name</Label>
              <Input
                type="text"
                placeholder="Enter file name (optional)"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="rounded-xl h-12 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800
                  focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Select Channels</Label>
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg max-h-64 overflow-y-auto">
                <div className="col-span-2">
                  <label className="flex items-center p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors cursor-pointer">
                    <Checkbox
                      id="all-channels"
                      checked={selectedChannels.includes("all")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedChannels(["all"]);
                        } else {
                          setSelectedChannels([]);
                        }
                      }}
                      className="h-5 w-5 rounded-lg"
                    />
                    <span className="ml-3 font-medium">
                      Select All Channels
                    </span>
                  </label>
                </div>

                {!selectedChannels.includes("all") &&
                  channels.map((channel) => (
                    <label
                      key={channel}
                      className="flex items-center p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors cursor-pointer"
                    >
                      <Checkbox
                        id={channel}
                        checked={selectedChannels.includes(channel)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedChannels([...selectedChannels, channel]);
                          } else {
                            setSelectedChannels(
                              selectedChannels.filter((ch) => ch !== channel)
                            );
                          }
                        }}
                        className="h-5 w-5 rounded-lg"
                      />
                      <span className="ml-3">{channel}</span>
                    </label>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 bg-zinc-50 dark:bg-zinc-800/50">
          <Button
            onClick={handleDownload}
            disabled={selectedChannels.length === 0 || isDownloading}
            className="w-full h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white
              dark:bg-blue-400 dark:hover:bg-blue-500 font-medium
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 shadow-lg hover:shadow-xl
              flex items-center justify-center gap-2"
          >
            {isDownloading ? (
              <>
                <Check className="h-4 w-4" />
                Download Complete
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download CSV
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
