import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Clock, PieChart, List } from "lucide-react";

// Generate sample data for ad schedule
const generateAdSchedule = (station) => {
  const timeSlots = [
    "06:00 AM",
    "09:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM",
    "09:00 PM",
  ];
  const adTypes = ["Jingle", "Sponsor Mention", "Commercial", "Promotion"];
  const programs = [
    "Morning Show",
    "News Hour",
    "Music Marathon",
    "Evening Drive",
  ];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: new Date(
      2025,
      0,
      Math.floor(Math.random() * 31) + 1
    ).toLocaleDateString(),
    time: timeSlots[Math.floor(Math.random() * timeSlots.length)],
    station,
    program: programs[Math.floor(Math.random() * programs.length)],
    adType: adTypes[Math.floor(Math.random() * adTypes.length)],
    duration: Math.floor(Math.random() * 30) + 15,
    advertiser: `Advertiser ${Math.floor(Math.random() * 10) + 1}`,
  }));
};

// Generate gap analysis data
const generateGapAnalysis = (station) => {
  const timeSlots = [
    "06:00-09:00",
    "09:00-12:00",
    "12:00-15:00",
    "15:00-18:00",
    "18:00-21:00",
    "21:00-00:00",
  ];

  return timeSlots.map((slot) => ({
    timeSlot: slot,
    station,
    totalSlots: Math.floor(Math.random() * 20) + 10,
    filledSlots: Math.floor(Math.random() * 15) + 5,
    utilization: Math.floor(Math.random() * 100),
  }));
};

// Generate ad type distribution
const generateAdTypeDistribution = (station) => {
  const types = [
    "Jingles",
    "Sponsor Mentions",
    "Commercials",
    "Promotions",
    "PSAs",
    "Station IDs",
  ];

  const total = 100;
  return types.map((type) => {
    const count = Math.floor(Math.random() * 50) + 10;
    return {
      type,
      station,
      count,
      percentage: ((count / total) * 100).toFixed(1),
    };
  });
};

const DetailedAdAnalysis = () => {
  const [station, setStation] = useState("radio city");
  const [adSchedule, setAdSchedule] = useState(generateAdSchedule(station));
  const [gapAnalysis, setGapAnalysis] = useState(generateGapAnalysis(station));
  const [adTypeData, setAdTypeData] = useState(
    generateAdTypeDistribution(station)
  );

  const handleStationChange = (value) => {
    setStation(value);
    setAdSchedule(generateAdSchedule(value));
    setGapAnalysis(generateGapAnalysis(value));
    setAdTypeData(generateAdTypeDistribution(value));
  };

  const handleExport = (type) => {
    alert(`Exporting ${type} data as CSV...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Detailed Ad Analysis</h2>
        <Select value={station} onValueChange={handleStationChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select station" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="radio city">Radio City</SelectItem>
            <SelectItem value="radio mirchi">Radio Mirchi</SelectItem>
            <SelectItem value="red fm">Red FM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="schedule">
            <Calendar className="w-4 h-4 mr-2" />
            Ad Schedule
          </TabsTrigger>
          <TabsTrigger value="gaps">
            <Clock className="w-4 h-4 mr-2" />
            Gap Analysis
          </TabsTrigger>
          <TabsTrigger value="types">
            <PieChart className="w-4 h-4 mr-2" />
            Ad Types
          </TabsTrigger>
          <TabsTrigger value="duration">
            <List className="w-4 h-4 mr-2" />
            Duration Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schedule">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Ad Schedule Overview</CardTitle>
                <CardDescription>
                  Detailed view of scheduled advertisements
                </CardDescription>
              </div>
              <Button onClick={() => handleExport("schedule")}>
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Ad Type</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Advertiser</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adSchedule.map((ad) => (
                    <TableRow key={ad.id}>
                      <TableCell>{ad.date}</TableCell>
                      <TableCell>{ad.time}</TableCell>
                      <TableCell>{ad.program}</TableCell>
                      <TableCell>{ad.adType}</TableCell>
                      <TableCell>{ad.duration}s</TableCell>
                      <TableCell>{ad.advertiser}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gaps">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Gap Analysis</CardTitle>
                <CardDescription>
                  Available and utilized ad slots
                </CardDescription>
              </div>
              <Button onClick={() => handleExport("gaps")}>
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time Slot</TableHead>
                    <TableHead>Total Slots</TableHead>
                    <TableHead>Filled Slots</TableHead>
                    <TableHead>Utilization %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gapAnalysis.map((slot, index) => (
                    <TableRow
                      key={index}
                      className={slot.utilization < 50 ? "bg-red-50" : ""}
                    >
                      <TableCell>{slot.timeSlot}</TableCell>
                      <TableCell>{slot.totalSlots}</TableCell>
                      <TableCell>{slot.filledSlots}</TableCell>
                      <TableCell>{slot.utilization}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Ad Type Distribution</CardTitle>
                <CardDescription>
                  Breakdown of different ad formats
                </CardDescription>
              </div>
              <Button onClick={() => handleExport("types")}>
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ad Type</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adTypeData.map((type, index) => (
                    <TableRow key={index}>
                      <TableCell>{type.type}</TableCell>
                      <TableCell>{type.count}</TableCell>
                      <TableCell>{type.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="duration">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Duration Analysis</CardTitle>
                <CardDescription>
                  Ad break patterns and durations
                </CardDescription>
              </div>
              <Button onClick={() => handleExport("duration")}>
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time Slot</TableHead>
                    <TableHead>Avg. Duration</TableHead>
                    <TableHead>Total Breaks</TableHead>
                    <TableHead>Ads per Break</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gapAnalysis.map((slot, index) => (
                    <TableRow key={index}>
                      <TableCell>{slot.timeSlot}</TableCell>
                      <TableCell>
                        {Math.floor(Math.random() * 60) + 30}s
                      </TableCell>
                      <TableCell>{Math.floor(Math.random() * 8) + 3}</TableCell>
                      <TableCell>{Math.floor(Math.random() * 3) + 2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailedAdAnalysis;
