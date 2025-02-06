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
  const [selectedMonths, setSelectedMonths] = useState(["jan24"]);
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
    { value: "jan24", label: "January 2024", shortLabel: "Jan" },
    { value: "feb24", label: "February 2024", shortLabel: "Feb" },
    { value: "mar24", label: "March 2024", shortLabel: "Mar" },
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "kolkata", label: "Kolkata" },
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Bengaluru" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "kochi", label: "Kochi" },
    { value: "pune", label: "Pune" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "jaipur", label: "Jaipur" },
    { value: "lucknow", label: "Lucknow" },
  ];

  const languages = [
    { value: "all", label: "All Languages" },
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" },
    { value: "tamil", label: "Tamil" },
    { value: "telugu", label: "Telugu" },
    { value: "kannada", label: "Kannada" },
    { value: "malayalam", label: "Malayalam" },
    { value: "gujarati", label: "Gujarati" },
    { value: "bengali", label: "Bengali" },
    { value: "english", label: "English" },
  ];

  const rawData = {
    "Radio City": {
      "Delhi": {
        region: "delhi",
        language: "hindi",
        monthly: {
          jan24: { automotive: 52, retail: 45, fmcg: 38, banking: 32, entertainment: 28 },
          feb24: { automotive: 54, retail: 47, fmcg: 40, banking: 34, entertainment: 29 },
          mar24: { automotive: 53, retail: 46, fmcg: 39, banking: 33, entertainment: 30 }
        }
      },
      "Mumbai": {
        region: "mumbai",
        language: "marathi",
        monthly: {
          jan24: { automotive: 48, retail: 42, fmcg: 35, banking: 30, entertainment: 25 },
          feb24: { automotive: 50, retail: 44, fmcg: 37, banking: 31, entertainment: 26 },
          mar24: { automotive: 49, retail: 43, fmcg: 36, banking: 32, entertainment: 27 }
        }
      },
      "Bangalore": {
        region: "bangalore",
        language: "kannada",
        monthly: {
          jan24: { automotive: 45, retail: 39, fmcg: 32, banking: 28, entertainment: 23 },
          feb24: { automotive: 47, retail: 41, fmcg: 34, banking: 29, entertainment: 24 },
          mar24: { automotive: 46, retail: 40, fmcg: 33, banking: 28, entertainment: 25 }
        }
      }
    },
    "Radio Mirchi": {
      "Chennai": {
        region: "chennai",
        language: "tamil",
        monthly: {
          jan24: { automotive: 46, retail: 40, fmcg: 33, banking: 28, entertainment: 24 },
          feb24: { automotive: 48, retail: 42, fmcg: 35, banking: 30, entertainment: 25 },
          mar24: { automotive: 47, retail: 41, fmcg: 34, banking: 29, entertainment: 26 }
        }
      },
      "Kolkata": {
        region: "kolkata",
        language: "bengali",
        monthly: {
          jan24: { automotive: 44, retail: 38, fmcg: 31, banking: 26, entertainment: 22 },
          feb24: { automotive: 46, retail: 40, fmcg: 33, banking: 28, entertainment: 23 },
          mar24: { automotive: 45, retail: 39, fmcg: 32, banking: 27, entertainment: 24 }
        }
      },
      "Hyderabad": {
        region: "hyderabad",
        language: "telugu",
        monthly: {
          jan24: { automotive: 43, retail: 37, fmcg: 30, banking: 25, entertainment: 21 },
          feb24: { automotive: 45, retail: 39, fmcg: 32, banking: 27, entertainment: 22 },
          mar24: { automotive: 44, retail: 38, fmcg: 31, banking: 26, entertainment: 23 }
        }
      }
    },
    "Red FM": {
      "Ahmedabad": {
        region: "ahmedabad",
        language: "gujarati",
        monthly: {
          jan24: { automotive: 42, retail: 36, fmcg: 29, banking: 24, entertainment: 20 },
          feb24: { automotive: 44, retail: 38, fmcg: 31, banking: 26, entertainment: 21 },
          mar24: { automotive: 43, retail: 37, fmcg: 30, banking: 25, entertainment: 22 }
        }
      },
      "Pune": {
        region: "pune",
        language: "marathi",
        monthly: {
          jan24: { automotive: 41, retail: 35, fmcg: 28, banking: 23, entertainment: 19 },
          feb24: { automotive: 43, retail: 37, fmcg: 30, banking: 25, entertainment: 20 },
          mar24: { automotive: 42, retail: 36, fmcg: 29, banking: 24, entertainment: 21 }
        }
      },
      "Lucknow": {
        region: "lucknow",
        language: "hindi",
        monthly: {
          jan24: { automotive: 40, retail: 34, fmcg: 27, banking: 22, entertainment: 18 },
          feb24: { automotive: 42, retail: 36, fmcg: 29, banking: 24, entertainment: 19 },
          mar24: { automotive: 41, retail: 35, fmcg: 28, banking: 23, entertainment: 20 }
        }
      }
    },
    "Big FM": {
      "Kochi": {
        region: "kochi",
        language: "malayalam",
        monthly: {
          jan24: { automotive: 39, retail: 33, fmcg: 26, banking: 21, entertainment: 17 },
          feb24: { automotive: 41, retail: 35, fmcg: 28, banking: 23, entertainment: 18 },
          mar24: { automotive: 40, retail: 34, fmcg: 27, banking: 22, entertainment: 19 }
        }
      },
      "Jaipur": {
        region: "jaipur",
        language: "hindi",
        monthly: {
          jan24: { automotive: 38, retail: 32, fmcg: 25, banking: 20, entertainment: 16 },
          feb24: { automotive: 40, retail: 34, fmcg: 27, banking: 22, entertainment: 17 },
          mar24: { automotive: 39, retail: 33, fmcg: 26, banking: 21, entertainment: 18 }
        }
      }
    }
  };

  // Convert nested data structure to flat array for filtering
  const flattenedData = Object.entries(rawData).flatMap(([network, stations]) =>
    Object.entries(stations).map(([city, data]) => ({
      station: `${network} ${city}`,
      ...data
    }))
  );

  const handleMonthSelection = (value) => {
    if (selectedMonths.includes(value)) {
      setSelectedMonths(selectedMonths.filter(month => month !== value));
    } else {
      setSelectedMonths([...selectedMonths, value]);
    }
  };

  const filteredData = useMemo(() => {
    return flattenedData
      .filter((stationData) => {
        const regionMatch = selectedRegion === "all" || stationData.region === selectedRegion;
        const languageMatch = selectedLanguage === "all" || stationData.language === selectedLanguage;
        return regionMatch && languageMatch;
      })
      .map((stationData) => ({
        station: stationData.station,
        monthlyData: selectedMonths.map(month => ({
          month,
          ads: stationData.monthly[month] || {},
        })),
        region: stationData.region,
        language: stationData.language,
      }));
  }, [selectedMonths, selectedRegion, selectedLanguage]);

  const maxTotalAds = useMemo(() => {
    return Math.max(
      ...filteredData.map((station) =>
        station.monthlyData.reduce((sum, monthData) => 
          sum + Object.values(monthData.ads).reduce((a, b) => a + b, 0), 0
        )
      )
    );
  }, [filteredData]);


  const formatSelectedMonths = (selected) => {
    if (selected.length === 0) return "Select months";
    if (selected.length === 3) return "Quarter 1";
    
    return selected
      .map(month => months.find(m => m.value === month)?.shortLabel)
      .sort((a, b) => months.findIndex(m => m.shortLabel === a) - months.findIndex(m => m.shortLabel === b))
      .join("-");
  };

  // const handleMonthSelection = (value) => {
  //   if (selectedMonths.includes(value)) {
  //     setSelectedMonths(selectedMonths.filter(month => month !== value));
  //   } else {
  //     setSelectedMonths([...selectedMonths, value]);
  //   }
  // };

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
                Compare sector performance across regions and languages
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Filter className="h-6 w-6 text-primary/60" />
            <div className="flex gap-2">
            <Select
            value={selectedMonths[0]}
            onValueChange={handleMonthSelection}
          >
            <SelectTrigger className="w-40">
              <SelectValue>
                {formatSelectedMonths(selectedMonths)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem 
                  key={month.value} 
                  value={month.value}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedMonths.includes(month.value)}
                    onChange={() => {}}
                    className="mr-2"
                  />
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
        <div className="mt-6 space-y-8">
          {filteredData.map((station) => (
            <div key={station.station} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-36">
                  <div className="text-sm font-medium">{station.station}</div>
                  <div className="text-xs text-gray-400">
                    {regions.find(r => r.value === station.region)?.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {languages.find(l => l.value === station.language)?.label}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {station.monthlyData.map((monthData) => {
                      const totalMonthAds = Object.values(monthData.ads).reduce((a, b) => a + b, 0);
                      return (
                        <div key={monthData.month} className="relative">
                          <div className="text-xs text-gray-500 mb-1">
                            {months.find(m => m.value === monthData.month)?.label}
                          </div>
                          <div className="relative h-16 min-w-screen">
                            <div className="absolute inset-y-0 w-full bg-gray-100 rounded-xl" />
                            <div
                              className="relative h-full rounded-xl flex overflow-hidden"
                              style={{
                                width: `${(totalMonthAds / maxTotalAds) * 100}%`,
                              }}
                            >
                              {Object.entries(monthData.ads).map(([sector, value]) => {
                                const percentage = (value / totalMonthAds) * 100;
                                return (
                                  <div
                                    key={sector}
                                    className="h-full relative flex items-center justify-center group"
                                    style={{
                                      width: `${percentage}%`,
                                      backgroundColor: sectors[sector].color,
                                    }}
                                  >
                                    <div className="text-xs font-medium text-white drop-shadow-md">
                                      {value}
                                    </div>
                                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                      {sectors[sector].name}: {value} ({percentage.toFixed(1)}%)
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm font-medium mb-4">Legend</div>
          <div className="grid grid-cols-5 gap-4 text-sm">
            {Object.entries(sectors).map(([key, sector]) => (
              <div
                key={key}
                className="flex items-center gap-3 bg-gray-50/50 rounded-xl p-3"
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: sector.color }}
                />
                <span className="text-gray-600">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadioSectorAnalysis;