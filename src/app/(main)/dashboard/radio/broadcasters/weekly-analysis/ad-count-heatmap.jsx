import React, { useState } from "react";
import { Radio, Clock, Info } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const RadioAdHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  // Sample data structure - replace with your actual data
const data = {
  adFrequency: [
    { station: "RADIO CITY FM", hour: "00:00", frequency: 14 },
    { station: "RADIO CITY FM", hour: "01:00", frequency: 17 },
    { station: "RADIO CITY FM", hour: "02:00", frequency: 11 },
    { station: "RADIO CITY FM", hour: "03:00", frequency: 10 },
    { station: "RADIO CITY FM", hour: "04:00", frequency: 19 },
    { station: "RADIO CITY FM", hour: "05:00", frequency: 23 },
    { station: "RADIO CITY FM", hour: "06:00", frequency: 25 },
    { station: "RADIO CITY FM", hour: "07:00", frequency: 22 },
    { station: "RADIO CITY FM", hour: "08:00", frequency: 24 },
    { station: "RADIO CITY FM", hour: "09:00", frequency: 21 },
    { station: "RADIO CITY FM", hour: "10:00", frequency: 16 },
    { station: "RADIO CITY FM", hour: "11:00", frequency: 18 },
    { station: "RADIO CITY FM", hour: "12:00", frequency: 20 },
    { station: "RADIO CITY FM", hour: "13:00", frequency: 15 },
    { station: "RADIO CITY FM", hour: "14:00", frequency: 14 },
    { station: "RADIO CITY FM", hour: "15:00", frequency: 19 },
    { station: "RADIO CITY FM", hour: "16:00", frequency: 23 },
    { station: "RADIO CITY FM", hour: "17:00", frequency: 25 },
    { station: "RADIO CITY FM", hour: "18:00", frequency: 20 },
    { station: "RADIO CITY FM", hour: "19:00", frequency: 17 },
    { station: "RADIO CITY FM", hour: "20:00", frequency: 14 },
    { station: "RADIO CITY FM", hour: "21:00", frequency: 12 },
    { station: "RADIO CITY FM", hour: "22:00", frequency: 10 },
    { station: "RADIO CITY FM", hour: "23:00", frequency: 13 },
    { station: "RED FM", hour: "00:00", frequency: 15 },
    { station: "RED FM", hour: "01:00", frequency: 18 },
    { station: "RED FM", hour: "02:00", frequency: 12 },
    { station: "RED FM", hour: "03:00", frequency: 10 },
    { station: "RED FM", hour: "04:00", frequency: 14 },
    { station: "RED FM", hour: "05:00", frequency: 19 },
    { station: "RED FM", hour: "06:00", frequency: 25 },
    { station: "RED FM", hour: "07:00", frequency: 23 },
    { station: "RED FM", hour: "08:00", frequency: 22 },
    { station: "RED FM", hour: "09:00", frequency: 20 },
    { station: "RED FM", hour: "10:00", frequency: 17 },
    { station: "RED FM", hour: "11:00", frequency: 19 },
    { station: "RED FM", hour: "12:00", frequency: 16 },
    { station: "RED FM", hour: "13:00", frequency: 14 },
    { station: "RED FM", hour: "14:00", frequency: 15 },
    { station: "RED FM", hour: "15:00", frequency: 20 },
    { station: "RED FM", hour: "16:00", frequency: 24 },
    { station: "RED FM", hour: "17:00", frequency: 25 },
    { station: "RED FM", hour: "18:00", frequency: 18 },
    { station: "RED FM", hour: "19:00", frequency: 17 },
    { station: "RED FM", hour: "20:00", frequency: 13 },
    { station: "RED FM", hour: "21:00", frequency: 11 },
    { station: "RED FM", hour: "22:00", frequency: 10 },
    { station: "RED FM", hour: "23:00", frequency: 14 },
    { station: "RADIO MIRCHI FM", hour: "00:00", frequency: 13 },
    { station: "RADIO MIRCHI FM", hour: "01:00", frequency: 11 },
    { station: "RADIO MIRCHI FM", hour: "02:00", frequency: 10 },
    { station: "RADIO MIRCHI FM", hour: "03:00", frequency: 12 },
    { station: "RADIO MIRCHI FM", hour: "04:00", frequency: 14 },
    { station: "RADIO MIRCHI FM", hour: "05:00", frequency: 15 },
    { station: "RADIO MIRCHI FM", hour: "06:00", frequency: 20 },
    { station: "RADIO MIRCHI FM", hour: "07:00", frequency: 23 },
    { station: "RADIO MIRCHI FM", hour: "08:00", frequency: 25 },
    { station: "RADIO MIRCHI FM", hour: "09:00", frequency: 21 },
    { station: "RADIO MIRCHI FM", hour: "10:00", frequency: 16 },
    { station: "RADIO MIRCHI FM", hour: "11:00", frequency: 18 },
    { station: "RADIO MIRCHI FM", hour: "12:00", frequency: 19 },
    { station: "RADIO MIRCHI FM", hour: "13:00", frequency: 15 },
    { station: "RADIO MIRCHI FM", hour: "14:00", frequency: 14 },
    { station: "RADIO MIRCHI FM", hour: "15:00", frequency: 17 },
    { station: "RADIO MIRCHI FM", hour: "16:00", frequency: 23 },
    { station: "RADIO MIRCHI FM", hour: "17:00", frequency: 25 },
    { station: "RADIO MIRCHI FM", hour: "18:00", frequency: 20 },
    { station: "RADIO MIRCHI FM", hour: "19:00", frequency: 15 },
    { station: "RADIO MIRCHI FM", hour: "20:00", frequency: 12 },
    { station: "RADIO MIRCHI FM", hour: "21:00", frequency: 11 },
    { station: "RADIO MIRCHI FM", hour: "22:00", frequency: 10 },
    { station: "RADIO MIRCHI FM", hour: "23:00", frequency: 14 },
    { station: "BIG FM", hour: "00:00", frequency: 15 },
    { station: "BIG FM", hour: "01:00", frequency: 11 },
    { station: "BIG FM", hour: "02:00", frequency: 10 },
    { station: "BIG FM", hour: "03:00", frequency: 12 },
    { station: "BIG FM", hour: "04:00", frequency: 13 },
    { station: "BIG FM", hour: "05:00", frequency: 14 },
    { station: "BIG FM", hour: "06:00", frequency: 18 },
    { station: "BIG FM", hour: "07:00", frequency: 22 },
    { station: "BIG FM", hour: "08:00", frequency: 24 },
    { station: "BIG FM", hour: "09:00", frequency: 20 },
    { station: "BIG FM", hour: "10:00", frequency: 17 },
    { station: "BIG FM", hour: "11:00", frequency: 18 },
    { station: "BIG FM", hour: "12:00", frequency: 19 },
    { station: "BIG FM", hour: "13:00", frequency: 15 },
    { station: "BIG FM", hour: "14:00", frequency: 14 },
    { station: "BIG FM", hour: "15:00", frequency: 20 },
    { station: "BIG FM", hour: "16:00", frequency: 24 },
    { station: "BIG FM", hour: "17:00", frequency: 25 },
    { station: "BIG FM", hour: "18:00", frequency: 18 },
    { station: "BIG FM", hour: "19:00", frequency: 15 },
    { station: "BIG FM", hour: "20:00", frequency: 12 },
    { station: "BIG FM", hour: "21:00", frequency: 11 },
    { station: "BIG FM", hour: "22:00", frequency: 10 },
    { station: "BIG FM", hour: "23:00", frequency: 14 },
    { station: "RAINBOW FM", hour: "00:00", frequency: 20 },
    { station: "RAINBOW FM", hour: "01:00", frequency: 18 },
    { station: "RAINBOW FM", hour: "02:00", frequency: 17 },
    { station: "RAINBOW FM", hour: "03:00", frequency: 15 },
    { station: "RAINBOW FM", hour: "04:00", frequency: 16 },
    { station: "RAINBOW FM", hour: "05:00", frequency: 19 },
    { station: "RAINBOW FM", hour: "06:00", frequency: 23 },
    { station: "RAINBOW FM", hour: "07:00", frequency: 25 },
    { station: "RAINBOW FM", hour: "08:00", frequency: 24 },
    { station: "RAINBOW FM", hour: "09:00", frequency: 22 },
    { station: "RAINBOW FM", hour: "10:00", frequency: 21 },
    { station: "RAINBOW FM", hour: "11:00", frequency: 18 },
    { station: "RAINBOW FM", hour: "12:00", frequency: 19 },
    { station: "RAINBOW FM", hour: "13:00", frequency: 15 },
    { station: "RAINBOW FM", hour: "14:00", frequency: 14 },
    { station: "RAINBOW FM", hour: "15:00", frequency: 20 },
    { station: "RAINBOW FM", hour: "16:00", frequency: 24 },
    { station: "RAINBOW FM", hour: "17:00", frequency: 25 },
    { station: "RAINBOW FM", hour: "18:00", frequency: 23 },
    { station: "RAINBOW FM", hour: "19:00", frequency: 20 },
    { station: "RAINBOW FM", hour: "20:00", frequency: 18 },
    { station: "RAINBOW FM", hour: "21:00", frequency: 17 },
    { station: "RAINBOW FM", hour: "22:00", frequency: 15 },
    { station: "RAINBOW FM", hour: "23:00", frequency: 14 },
  ],
};


  const processData = (data) => {
    const hours = Array.from(
      { length: 24 },
      (_, i) => `${String(i).padStart(2, "0")}:00`
    );
    const stations = [...new Set(data.map((item) => item.station))];

    const matrix = stations.map((station) => {
      const stationData = { station };
      hours.forEach((hour) => {
        const match = data.find(
          (d) => d.station === station && d.hour === hour
        );
        stationData[hour] = match ? match.frequency : 0;
      });
      return stationData;
    });

    return matrix;
  };

  const matrix = processData(data.adFrequency);
  const { min, max } = {
    min: 0,
    max: 15, // Adjust based on your actual data
  };

  const getColor = (value) => {
    if (!value) return "rgb(244, 245, 247)";
    const normalizedValue = (value - min) / (max - min);
    return `rgba(242, 100, 50, ${0.2 + normalizedValue * 0.5})`; // Apple Blue with variable opacity
  };

  const hours = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  );

  const getTimeOfDay = (hour) => {
    const hourNum = parseInt(hour);
    if (hourNum >= 5 && hourNum < 12) return "Morning";
    if (hourNum >= 12 && hourNum < 17) return "Afternoon";
    if (hourNum >= 17 && hourNum < 21) return "Evening";
    return "Night";
  };

  return (
    <Card className="w-full bg-gradient-to-br from-gray-50/50 to-gray-100/50 backdrop-blur-xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-2">
              <Radio className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-1">
                Ad Airplay time Distribution Heatmap
              </CardTitle>
              <CardDescription className="text-gray-500">
                24-hour advertisement duration analysis
              </CardDescription>
            </div>
          </div>
          <Clock className="h-6 w-6 text-primary/60" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-7xl">
            <div
              className="grid gap-px bg-gray-100"
              style={{
                gridTemplateColumns: "auto repeat(24, minmax(40px, 1fr))",
              }}
            >
              <div className="bg-gray-50/80 font-medium p-3 w-32 rounded-tl-lg">
                Station
              </div>
              {hours.map((hour, idx) => (
                <div
                  key={hour}
                  className="bg-gray-50/80 p-2 text-center relative group"
                  onMouseEnter={() => setHoveredCell(hour)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="text-xs font-medium text-gray-600">
                    {hour}
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {getTimeOfDay(hour)}
                  </div>
                </div>
              ))}
            </div>

            {matrix.map((row, idx) => (
              <div
                key={idx}
                className="grid"
                style={{
                  gridTemplateColumns: "auto repeat(24, minmax(40px, 1fr))",
                }}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div
                  className={`py-4 font-medium w-32 h-16 p-3 bg-gray-50/80 text-sm transition-colors ${
                    hoveredRow === idx ? "text-primary" : ""
                  }`}
                >
                  {row.station}
                </div>
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="relative group"
                    style={{
                      backgroundColor: getColor(row[hour]),
                    }}
                  >
                    <div
                      className={`w-full h-full p-2 text-center transition-all duration-200`}
                    >
                      <span className="text-xs font-medium">{row[hour]}</span>
                    </div>
                    <div className="absolute -top-8 left-1/2  w-20 h-fit z-50 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {`${row.station}: ${row[hour]} mins`}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-gray-50/50 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600">Frequency:</div>
                <div className="h-4 w-96 rounded-md bg-gradient-to-r from-[#F2643022] to-[#F26430]" />
                <div className="text-sm text-gray-600">Higher</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">Hover for details</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="text-sm text-gray-500 border-t mt-4 pt-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>
            Advertisement frequency analysis across 24-hour broadcast period
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RadioAdHeatmap;
