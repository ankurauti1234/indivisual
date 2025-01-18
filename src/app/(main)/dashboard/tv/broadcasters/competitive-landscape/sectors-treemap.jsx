import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft, BarChart2, Tv } from "lucide-react";
import ChartCard from "@/components/card/charts-card";
import { Button } from "@/components/ui/button";

const TVChannelTreemap = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const mockData = {
    "Nepal Television": {
      color: "#FF6B6B",
      adSpend: 25000000,
      grp: 92,
      sectors: {
        "Food & Beverages": {
          color: "#4ECDC4",
          adSpend: 8000000,
          grp: 90,
          categories: {
            "Instant Noodles": {
              adSpend: 3000000,
              grp: 92,
              brands: [
                { name: "Wai Wai", adSpend: 1500000, grp: 94 },
                { name: "2PM", adSpend: 1000000, grp: 90 },
                { name: "Rara", adSpend: 500000, grp: 88 },
              ],
            },
            "Soft Drinks": {
              adSpend: 5000000,
              grp: 88,
              brands: [
                { name: "Coca Cola", adSpend: 2500000, grp: 90 },
                { name: "Pepsi", adSpend: 2000000, grp: 86 },
                { name: "Fanta", adSpend: 500000, grp: 85 },
              ],
            },
          },
        },
        Telecommunications: {
          color: "#9B59B6",
          adSpend: 7000000,
          grp: 88,
          categories: {
            "Mobile Services": {
              adSpend: 4000000,
              grp: 89,
              brands: [
                { name: "Ncell", adSpend: 2000000, grp: 90 },
                { name: "NTC", adSpend: 2000000, grp: 88 },
              ],
            },
            "Internet Services": {
              adSpend: 3000000,
              grp: 86,
              brands: [
                { name: "WorldLink", adSpend: 1500000, grp: 87 },
                { name: "Vianet", adSpend: 1500000, grp: 85 },
              ],
            },
          },
        },
      },
    },
    "Kantipur TV": {
      color: "#2ECC71",
      adSpend: 22000000,
      grp: 88,
      sectors: {
        Banking: {
          color: "#3498DB",
          adSpend: 10000000,
          grp: 85,
          categories: {
            "Personal Banking": {
              adSpend: 6000000,
              grp: 86,
              brands: [
                { name: "NIC Asia", adSpend: 3000000, grp: 87 },
                { name: "Global IME", adSpend: 3000000, grp: 85 },
              ],
            },
            "Credit Cards": {
              adSpend: 4000000,
              grp: 84,
              brands: [
                { name: "Nabil Bank", adSpend: 2500000, grp: 85 },
                { name: "Standard Chartered", adSpend: 1500000, grp: 83 },
              ],
            },
          },
        },
      },
    },
    "Image Channel": {
      color: "#E74C3C",
      adSpend: 18000000,
      grp: 82,
      sectors: {
        FMCG: {
          color: "#F1C40F",
          adSpend: 9000000,
          grp: 84,
          categories: {
            "Personal Care": {
              adSpend: 5000000,
              grp: 85,
              brands: [
                { name: "Unilever", adSpend: 3000000, grp: 86 },
                { name: "P&G", adSpend: 2000000, grp: 84 },
              ],
            },
          },
        },
      },
    },
    "AP1 HD": {
      color: "#9B59B6",
      adSpend: 20000000,
      grp: 85,
      sectors: {
        Automotive: {
          color: "#E67E22",
          adSpend: 12000000,
          grp: 83,
          categories: {
            Cars: {
              adSpend: 8000000,
              grp: 84,
              brands: [
                { name: "Toyota", adSpend: 4000000, grp: 85 },
                { name: "Hyundai", adSpend: 4000000, grp: 83 },
              ],
            },
          },
        },
      },
    },
    News24: {
      color: "#16A085",
      adSpend: 15000000,
      grp: 80,
      sectors: {
        Education: {
          color: "#8E44AD",
          adSpend: 8000000,
          grp: 79,
          categories: {
            "Online Learning": {
              adSpend: 5000000,
              grp: 80,
              brands: [
                { name: "Deerwalk", adSpend: 3000000, grp: 81 },
                { name: "Broadway", adSpend: 2000000, grp: 79 },
              ],
            },
          },
        },
      },
    },
    "Mountain TV": {
      color: "#D35400",
      adSpend: 12000000,
      grp: 75,
      sectors: {
        Healthcare: {
          color: "#27AE60",
          adSpend: 7000000,
          grp: 76,
          categories: {
            Hospitals: {
              adSpend: 4000000,
              grp: 77,
              brands: [
                { name: "Grande", adSpend: 2500000, grp: 78 },
                { name: "Mediciti", adSpend: 1500000, grp: 76 },
              ],
            },
          },
        },
      },
    },
    "ABC News": {
      color: "#2980B9",
      adSpend: 10000000,
      grp: 72,
      sectors: {
        "Real Estate": {
          color: "#C0392B",
          adSpend: 6000000,
          grp: 73,
          categories: {
            Residential: {
              adSpend: 4000000,
              grp: 74,
              brands: [
                { name: "Civil Homes", adSpend: 2500000, grp: 75 },
                { name: "CE Construction", adSpend: 1500000, grp: 73 },
              ],
            },
          },
        },
      },
    },
    "Himalaya TV": {
      color: "#8E44AD",
      adSpend: 8000000,
      grp: 70,
      sectors: {
        Fashion: {
          color: "#D35400",
          adSpend: 5000000,
          grp: 71,
          categories: {
            Clothing: {
              adSpend: 3000000,
              grp: 72,
              brands: [
                { name: "Goldstar", adSpend: 2000000, grp: 73 },
                { name: "John Players", adSpend: 1000000, grp: 71 },
              ],
            },
            Residential: {
              adSpend: 4000000,
              grp: 74,
              brands: [
                { name: "Civil Homes", adSpend: 2500000, grp: 75 },
                { name: "CE Construction", adSpend: 1500000, grp: 73 },
              ],
            },
          },
        },
      },
    },
  };

  const getCurrentLevel = () => {
    if (selectedCategory) return "brands";
    if (selectedSector) return "categories";
    if (selectedChannel) return "sectors";
    return "channels";
  };

  const getTitle = () => {
    if (selectedCategory) {
      return `${selectedCategory} Brands`;
    }
    if (selectedSector) {
      return `${selectedSector} Categories`;
    }
    if (selectedChannel) {
      return `${selectedChannel} Sectors`;
    }
    return "TV Channels";
  };

  const getData = () => {
    if (selectedCategory) {
      return mockData[selectedChannel].sectors[selectedSector].categories[
        selectedCategory
      ].brands.map((brand) => ({
        name: brand.name,
        size: brand.adSpend,
        color: mockData[selectedChannel].sectors[selectedSector].color,
        grp: brand.grp,
      }));
    }
    if (selectedSector) {
      return Object.entries(
        mockData[selectedChannel].sectors[selectedSector].categories
      ).map(([name, data]) => ({
        name,
        size: data.adSpend,
        color: mockData[selectedChannel].sectors[selectedSector].color,
        grp: data.grp,
      }));
    }
    if (selectedChannel) {
      return Object.entries(mockData[selectedChannel].sectors).map(
        ([name, data]) => ({
          name,
          size: data.adSpend,
          color: data.color,
          grp: data.grp,
        })
      );
    }
    return Object.entries(mockData).map(([name, data]) => ({
      name,
      size: data.adSpend,
      color: data.color,
      grp: data.grp,
    }));
  };

  const handleClick = (name) => {
    const level = getCurrentLevel();
    if (level === "channels") {
      setSelectedChannel(name);
    } else if (level === "sectors") {
      setSelectedSector(name);
    } else if (level === "categories") {
      setSelectedCategory(name);
    }
  };

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else if (selectedSector) {
      setSelectedSector(null);
    } else if (selectedChannel) {
      setSelectedChannel(null);
    }
  };

  const CustomizedContent = ({ x, y, width, height, name, color }) => {
    const isHovered = hoveredItem === name;
    const display = width > 50 && height > 50;
    const level = getCurrentLevel();

    return (
      <g
        onMouseEnter={() => setHoveredItem(name)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => level !== "brands" && handleClick(name)}
        style={{ cursor: level !== "brands" ? "pointer" : "default" }}
      >
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={color}
          opacity={isHovered ? 0.8 : 1}
          style={{
            transition: "all 0.3s ease",
            filter: isHovered ? "brightness(1.1)" : "none",
          }}
          rx={8}
          ry={8}
          stroke="white"
          strokeWidth={2}
        />
        {display && (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fill="#FFFFFF"
            style={{
              fontSize: width > 100 ? "16px" : "12px",
              fontWeight: "500",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              opacity: isHovered ? 1 : 0.9,
            }}
          >
            <tspan x={x + width / 2} dy="-0.5em">
              {name}
            </tspan>
            <tspan
              x={x + width / 2}
              dy="1.5em"
              style={{
                fontSize: width > 100 ? "14px" : "11px",
                fontWeight: "400",
              }}
            >
              ${((width * height) / 5000).toFixed(1)}K
            </tspan>
          </text>
        )}
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="backdrop-blur-xl bg-white/90 p-4 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: data.color }}
            />
            <h3 className="font-semibold text-lg">{data.name}</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Ad Spend: ${(data.size / 1000000).toFixed(2)}M
            </p>
            {data.grp && (
              <p className="text-sm text-gray-600">GRP: {data.grp}</p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

    return (
      <ChartCard
        icon={<Tv className="w-6 h-6" />}
        title=" TV Channels Market Distribution Analysis"
        description="View spend sahre of each channels and sector and categories and brands"
        action={
          <div className="flex w-full justify-end">
            {(selectedChannel || selectedSector || selectedCategory) && (
              <Button onClick={handleBack} className="flex items-center gap-2 text-white">
                <ArrowLeft className="w-4 h-4" />
                Back to{" "}
                {selectedCategory
                  ? "Categories"
                  : selectedSector
                  ? "Sectors"
                  : "Channels"}
              </Button>
            )}
          </div>
        }
        chart={
          <ResponsiveContainer width="100%" height={600}>
            <Treemap
              data={getData()}
              dataKey="size"
              aspectRatio={16 / 9}
              stroke="#fff"
              content={<CustomizedContent />}
              animationEasing="ease-out"
            >
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "white", strokeWidth: 2 }}
              />
            </Treemap>
          </ResponsiveContainer>
        }
        footer={
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span
                className={`hover:text-primary cursor-pointer ${
                  !selectedChannel ? "text-primary font-medium" : ""
                }`}
                onClick={() => {
                  setSelectedChannel(null);
                  setSelectedSector(null);
                  setSelectedCategory(null);
                }}
              >
                Channels
              </span>
              {selectedChannel && (
                <>
                  <span>→</span>
                  <span
                    className={`hover:text-primary cursor-pointer ${
                      selectedChannel && !selectedSector
                        ? "text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedSector(null);
                      setSelectedCategory(null);
                    }}
                  >
                    {selectedChannel}
                  </span>
                </>
              )}
              {selectedSector && (
                <>
                  <span>→</span>
                  <span
                    className={`hover:text-primary cursor-pointer ${
                      selectedSector && !selectedCategory
                        ? "text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(null);
                    }}
                  >
                    {selectedSector}
                  </span>
                </>
              )}
              {selectedCategory && (
                <>
                  <span>→</span>
                  <span className="text-primary font-medium">
                    {selectedCategory}
                  </span>
                </>
              )}
            </div>
        }
      />
    );
};

export default TVChannelTreemap;