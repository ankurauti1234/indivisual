import React, { useState, useMemo } from "react";
import { Radio, Filter } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RadioSectorAnalysis = () => {
  const [selectedMonth, setSelectedMonth] = useState("jan24");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const sectors = {
    automotive: { name: "Automotive", color: "#61C9A8" },
    retail: { name: "Retail", color: "#ED9B40" },
    fmcg: { name: "FMCG", color: "#009DDC" },
    banking: { name: "Banking", color: "#A855F7" },
    entertainment: { name: "Entertainment", color: "#F26430" },
  };

  const months = [
    { value: "jan24", label: "January 2024" },
    { value: "feb24", label: "February 2024" },
    { value: "mar24", label: "March 2024" },
    { value: "apr24", label: "April 2024" },
    { value: "may24", label: "May 2024" },
    { value: "jun24", label: "June 2024" },
    { value: "jul24", label: "July 2024" },
    { value: "aug24", label: "August 2024" },
    { value: "sep24", label: "September 2024" },
    { value: "oct24", label: "October 2024" },
    { value: "nov24", label: "November 2024" },
    { value: "dec24", label: "December 2024" },
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "north", label: "North India" },
    { value: "south", label: "South India" },
    { value: "east", label: "East India" },
    { value: "west", label: "West India" },
  ];

  const languages = [
    { value: "all", label: "All Languages" },
    { value: "hindi", label: "Hindi" },
    { value: "english", label: "English" },
    { value: "tamil", label: "Tamil" },
    { value: "telugu", label: "Telugu" },
    { value: "marathi", label: "Marathi" },
  ];

  // Expanded sample data for all 12 months and 5 stations
  const rawData = {
    "Radio City FM": {
      region: "north",
      language: "hindi",
      monthly: {
        jan24: { automotive: 45, retail: 35, fmcg: 30, banking: 25, entertainment: 21 },
        feb24: { automotive: 42, retail: 38, fmcg: 32, banking: 28, entertainment: 23 },
        mar24: { automotive: 48, retail: 36, fmcg: 29, banking: 26, entertainment: 22 },
        apr24: { automotive: 44, retail: 39, fmcg: 31, banking: 27, entertainment: 24 },
        may24: { automotive: 46, retail: 37, fmcg: 33, banking: 29, entertainment: 25 },
        jun24: { automotive: 43, retail: 34, fmcg: 28, banking: 24, entertainment: 20 },
        jul24: { automotive: 41, retail: 36, fmcg: 30, banking: 26, entertainment: 23 },
        aug24: { automotive: 47, retail: 38, fmcg: 32, banking: 28, entertainment: 24 },
        sep24: { automotive: 45, retail: 35, fmcg: 29, banking: 25, entertainment: 22 },
        oct24: { automotive: 44, retail: 37, fmcg: 31, banking: 27, entertainment: 23 },
        nov24: { automotive: 46, retail: 39, fmcg: 33, banking: 29, entertainment: 25 },
        dec24: { automotive: 49, retail: 40, fmcg: 34, banking: 30, entertainment: 26 }
      }
    },
    "Radio Mirchi": {
      region: "south",
      language: "tamil",
      monthly: {
        jan24: { automotive: 38, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        feb24: { automotive: 40, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        mar24: { automotive: 42, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        apr24: { automotive: 39, retail: 35, fmcg: 31, banking: 27, entertainment: 23 },
        may24: { automotive: 41, retail: 36, fmcg: 32, banking: 28, entertainment: 24 },
        jun24: { automotive: 37, retail: 31, fmcg: 27, banking: 23, entertainment: 19 },
        jul24: { automotive: 36, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        aug24: { automotive: 43, retail: 35, fmcg: 31, banking: 27, entertainment: 23 },
        sep24: { automotive: 40, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        oct24: { automotive: 39, retail: 36, fmcg: 32, banking: 28, entertainment: 24 },
        nov24: { automotive: 42, retail: 37, fmcg: 33, banking: 29, entertainment: 25 },
        dec24: { automotive: 44, retail: 38, fmcg: 34, banking: 30, entertainment: 26 }
      }
    },
    "Red FM": {
      region: "west",
      language: "marathi",
      monthly: {
        jan24: { automotive: 36, retail: 30, fmcg: 26, banking: 22, entertainment: 18 },
        feb24: { automotive: 38, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        mar24: { automotive: 40, retail: 31, fmcg: 27, banking: 23, entertainment: 19 },
        apr24: { automotive: 37, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        may24: { automotive: 39, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        jun24: { automotive: 35, retail: 29, fmcg: 25, banking: 21, entertainment: 17 },
        jul24: { automotive: 34, retail: 31, fmcg: 27, banking: 23, entertainment: 19 },
        aug24: { automotive: 41, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        sep24: { automotive: 38, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        oct24: { automotive: 37, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        nov24: { automotive: 40, retail: 35, fmcg: 31, banking: 27, entertainment: 23 },
        dec24: { automotive: 42, retail: 36, fmcg: 32, banking: 28, entertainment: 24 }
      }
    },
    "Radio One": {
      region: "east",
      language: "bengali",
      monthly: {
        jan24: { automotive: 34, retail: 28, fmcg: 24, banking: 20, entertainment: 16 },
        feb24: { automotive: 36, retail: 30, fmcg: 26, banking: 22, entertainment: 18 },
        mar24: { automotive: 38, retail: 29, fmcg: 25, banking: 21, entertainment: 17 },
        apr24: { automotive: 35, retail: 31, fmcg: 27, banking: 23, entertainment: 19 },
        may24: { automotive: 37, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        jun24: { automotive: 33, retail: 27, fmcg: 23, banking: 19, entertainment: 15 },
        jul24: { automotive: 32, retail: 29, fmcg: 25, banking: 21, entertainment: 17 },
        aug24: { automotive: 39, retail: 31, fmcg: 27, banking: 23, entertainment: 19 },
        sep24: { automotive: 36, retail: 30, fmcg: 26, banking: 22, entertainment: 18 },
        oct24: { automotive: 35, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        nov24: { automotive: 38, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        dec24: { automotive: 40, retail: 34, fmcg: 30, banking: 26, entertainment: 22 }
      }
    },
    "Big FM": {
      region: "north",
      language: "english",
      monthly: {
        jan24: { automotive: 40, retail: 33, fmcg: 29, banking: 25, entertainment: 21 },
        feb24: { automotive: 42, retail: 35, fmcg: 31, banking: 27, entertainment: 23 },
        mar24: { automotive: 44, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        apr24: { automotive: 41, retail: 36, fmcg: 32, banking: 28, entertainment: 24 },
        may24: { automotive: 43, retail: 37, fmcg: 33, banking: 29, entertainment: 25 },
        jun24: { automotive: 39, retail: 32, fmcg: 28, banking: 24, entertainment: 20 },
        jul24: { automotive: 38, retail: 34, fmcg: 30, banking: 26, entertainment: 22 },
        aug24: { automotive: 45, retail: 36, fmcg: 32, banking: 28, entertainment: 24 },
        sep24: { automotive: 42, retail: 35, fmcg: 31, banking: 27, entertainment: 23 },
        oct24: { automotive: 41, retail: 37, fmcg: 33, banking: 29, entertainment: 25 },
        nov24: { automotive: 44, retail: 38, fmcg: 34, banking: 30, entertainment: 26 },
        dec24: { automotive: 46, retail: 39, fmcg: 35, banking: 31, entertainment: 27 }
      }
    }
  };

  const filteredData = useMemo(() => {
    return Object.entries(rawData)
      .filter(([_, stationData]) => {
        const regionMatch = selectedRegion === "all" || stationData.region === selectedRegion;
        const languageMatch = selectedLanguage === "all" || stationData.language === selectedLanguage;
        return regionMatch && languageMatch;
      })
      .map(([station, stationData]) => ({
        station,
        ads: stationData.monthly[selectedMonth] || {},
        region: stationData.region,
        language: stationData.language,
      }));
  }, [selectedMonth, selectedRegion, selectedLanguage]);

  const maxTotalAds = useMemo(() => {
    return Math.max(
      ...filteredData.map((station) =>
        Object.values(station.ads).reduce((a, b) => a + b, 0)
      )
    );
  }, [filteredData]);

  const calculateSectorTotals = () => {
    const totals = {};
    Object.keys(sectors).forEach(sector => {
      totals[sector] = filteredData.reduce((sum, station) => 
        sum + (station.ads[sector] || 0), 0
      );
    });
    return totals;
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
                Sector-wise Ad Distribution
              </CardTitle>
              <CardDescription className="text-gray-500">
                Advertisement spots by industry sectors across radio stations
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Filter className="h-6 w-6 text-primary/60" />
            <div className="flex gap-2">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.value} value={language.value}>
                      {language.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-6 space-y-5">
        {filteredData.map((station) => {
            const totalStationAds = Object.values(station.ads).reduce((a, b) => a + b, 0);
            return (
              <div
                key={station.station}
                className="relative group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-36">
                    <div className="text-sm font-medium">{station.station}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {totalStationAds} total ads
                    </div>
                    <div className="text-xs text-gray-400">
                      {regions.find(r => r.value === station.region)?.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {languages.find(l => l.value === station.language)?.label}
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 w-full bg-gray-100 rounded-xl" />
                    <div
                      className="relative h-16 rounded-xl flex overflow-hidden"
                      style={{
                        width: `${(totalStationAds / maxTotalAds) * 100}%`,
                      }}
                    >
                      {Object.entries(station.ads).map(([sector, value], index) => {
                        const percentage = (value / totalStationAds) * 100;
                        return (
                          <div
                            key={sector}
                            className="h-full relative flex items-center justify-center"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: sectors[sector].color,
                            }}
                          >
                            <div className="text-xs font-medium text-white drop-shadow-md">
                              <div>{value}</div>
                              <div>{percentage.toFixed(1)}%</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm font-medium mb-4">Sector Totals</div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            {Object.entries(sectors).map(([key, sector]) => {
              const totalAds = calculateSectorTotals()[key];
              return (
                <div
                  key={key}
                  className="flex items-center gap-3 bg-gray-50/50 rounded-xl p-3"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: sector.color }}
                  />
                  <span className="text-gray-600">{sector.name}</span>
                  <span className="ml-auto font-medium">{totalAds} ads</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadioSectorAnalysis;