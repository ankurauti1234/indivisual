// Updated DownloadDialog Component
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Download, Check } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DownloadDialog = ({ selectedDate }) => {
  const [date, setDate] = useState(new Date(selectedDate));
  const [fileFormat, setFileFormat] = useState("csv");
  const [open, setOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const formattedDate = format(date, "d_MMM").toLowerCase(); // e.g., "3_mar"
      const fileName = `${formattedDate}.${fileFormat}`; // e.g., "3_mar.csv" or "3_mar.xlsx"
      const fileUrl = `/files/${fileName}`; // Assuming files are in public/files/

      // Simulate fetching the file
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);

      toast({ title: "Download Complete", description: `File ${fileName} downloaded successfully.` });
      setTimeout(() => setOpen(false), 1000);
    } catch (error) {
      toast({ title: "Download Failed", description: "File not found or an error occurred.", variant: "destructive" });
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

            {/* File Format Selection */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">File Format</Label>
              <Select value={fileFormat} onValueChange={setFileFormat}>
                <SelectTrigger className="w-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                  <SelectValue placeholder="Select file format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="xlsx">XLSX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter className="p-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200/50 dark:border-zinc-700/50">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full h-12 rounded-lg bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isDownloading ? <Check className="h-5 w-5" /> : <Download className="h-5 w-5" />}
            {isDownloading ? "Downloaded" : "Download File"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;