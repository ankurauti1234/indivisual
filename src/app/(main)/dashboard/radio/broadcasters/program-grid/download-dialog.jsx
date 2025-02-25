import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Download, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { format, startOfDay } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DownloadDialog = ({ channels, epgData }) => {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const validateTimeInput = (time) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);

  const handleStartTimeChange = (e) => {
    const newTime = e.target.value;
    if (validateTimeInput(newTime) && newTime < endTime) setStartTime(newTime);
  };

  const handleEndTimeChange = (e) => {
    const newTime = e.target.value;
    if (validateTimeInput(newTime) && newTime > startTime) setEndTime(newTime);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const selectedDate = startOfDay(date);
      const selectedDateStr = format(selectedDate, "yyyy-MM-dd");

      const filteredData = epgData.filter((program) => {
        const programDateStr = format(new Date(program.date), "yyyy-MM-dd");
        const isSelectedChannel = selectedChannels.includes(program.channel) || selectedChannels.includes("all");
        const programStartTime = program.start.substring(0, 5);
        const programEndTime = program.end.substring(0, 5);
        return programDateStr === selectedDateStr && isSelectedChannel && programStartTime >= startTime && programEndTime <= endTime;
      });

      const csvContent = [
        ["Channel", "Date", "Start", "End", "Type", "Program Name"].join(","),
        ...filteredData.map((program) =>
          [program.channel, program.date, program.start, program.end, program.type, `"${program.program}"`].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName || `epg-data-${selectedDateStr}`}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);

      toast({ title: "Download Complete", description: "EPG data exported successfully." });
      setTimeout(() => setOpen(false), 1000);
    } catch (error) {
      toast({ title: "Download Failed", description: "An error occurred.", variant: "destructive" });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 shadow-md">
          <Download className="h-4 w-4 mr-2" /> Export
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 p-0">
        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Export EPG Data</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Date Picker */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full h-10 justify-start text-left bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {format(date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Start Time</Label>
                <Input
                  type="time"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  className="h-10 rounded-lg bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">End Time</Label>
                <Input
                  type="time"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  className="h-10 rounded-lg bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* File Name */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">File Name (Optional)</Label>
              <Input
                type="text"
                placeholder={`epg-data-${format(date, "yyyy-MM-dd")}`}
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="h-10 rounded-lg bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
            </div>

            {/* Channels */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Channels</Label>
              <div className="max-h-48 overflow-y-auto rounded-lg bg-white dark:bg-zinc-800 p-3 shadow-md border border-zinc-200 dark:border-zinc-700">
                <label className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700/50 cursor-pointer">
                  <Checkbox
                    checked={selectedChannels.includes("all")}
                    onCheckedChange={(checked) => setSelectedChannels(checked ? ["all"] : [])}
                    className="h-5 w-5 rounded-md"
                  />
                  <span className="ml-3 text-sm font-medium text-zinc-800 dark:text-zinc-100">All Channels</span>
                </label>
                {!selectedChannels.includes("all") &&
                  channels.map((channel) => (
                    <label key={channel} className="flex items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700/50 cursor-pointer">
                      <Checkbox
                        checked={selectedChannels.includes(channel)}
                        onCheckedChange={(checked) =>
                          setSelectedChannels(checked ? [...selectedChannels, channel] : selectedChannels.filter((ch) => ch !== channel))
                        }
                        className="h-5 w-5 rounded-md"
                      />
                      <span className="ml-3 text-sm text-zinc-800 dark:text-zinc-100">{channel}</span>
                    </label>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="p-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200/50 dark:border-zinc-700/50">
          <Button
            onClick={handleDownload}
            disabled={selectedChannels.length === 0 || isDownloading}
            className="w-full h-12 rounded-lg bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isDownloading ? <Check className="h-5 w-5" /> : <Download className="h-5 w-5" />}
            {isDownloading ? "Downloaded" : "Download CSV"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;