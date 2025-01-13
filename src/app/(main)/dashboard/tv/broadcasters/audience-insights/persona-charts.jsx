import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Persona descriptions
const personaDescriptions = {
  "urban-budget":
    "Urban Budget Shopper (Female-Focused): Shows compact viewing pattern focused on news and entertainment, with strong preference for mainstream channels",
  "urban-professional":
    "Urban Young Professional (Male-Focused): Demonstrates sophisticated viewing pattern across premium channels with high engagement in news and lifestyle content",
  "rural-aspiring":
    "Rural Aspiring Consumer (Male-Focused): Exhibits traditional viewing habits with strong loyalty to regional content and gradual transition to mainstream channels",
  "value-homemaker":
    "Value-Seeking Homemaker (Female-Focused): Shows diverse viewing pattern across multiple channels with focus on entertainment and news content",
};

// Channel data
const channels = [
  { name: "NTV", color: "#EB5A3C" },
  { name: "Kantipur TV", color: "#0D92F4" },
  { name: "Image Channel", color: "#A9C46C" },
  { name: "Avenues TV", color: "#9694FF" },
  { name: "Himalaya TV", color: "#F3C623" },
];

const ChannelTimeSpentChart = () => {
  const [selectedPersona, setSelectedPersona] = useState("urban-budget");
  const [selectedGenre, setSelectedGenre] = useState("news");

  // Example data (replace with real data fetching logic)
  const generateTimeSpentData = (persona, genre) => {
    const timeSpentData = channels.map((channel) => ({
      name: channel.name,
      timeSpent: Math.floor(Math.random() * 10) + 1, // Random time spent data (in minutes)
      color: channel.color,
    }));

    return timeSpentData;
  };

  const timeSpentData = generateTimeSpentData(selectedPersona, selectedGenre);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Time Spent on Channels</CardTitle>
        <CardDescription>
          View time spent on channels based on the selected persona and genre.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium mb-2">Select Persona</p>
            <Select value={selectedPersona} onValueChange={setSelectedPersona}>
              <SelectTrigger>
                <SelectValue placeholder="Select persona" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(personaDescriptions).map((key) => (
                  <SelectItem key={key} value={key}>
                    {key.replace("-", " ").toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Select Genre</p>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger>
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="news">News</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={timeSpentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="timeSpent"
              fill="#8884d8"
              name="Time Spent (mins)"
              label={{ position: "top", fontSize: 14 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const PersonaTimeSpentChart = () => {
  const [selectedChannel, setSelectedChannel] = useState("NTV");

  // Example data (replace with real data fetching logic)
  const generatePersonaTimeSpentData = (channel) => {
    const personaData = Object.keys(personaDescriptions).map((persona) => ({
      name: persona.replace("-", " ").toUpperCase(),
      timeSpent: Math.floor(Math.random() * 10) + 1, // Random time spent data (in minutes)
    }));

    return personaData;
  };

  const personaTimeSpentData = generatePersonaTimeSpentData(selectedChannel);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Time Spent by Personas on Channel</CardTitle>
        <CardDescription>
          View time spent by personas on the selected channel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Select Channel</p>
          <Select value={selectedChannel} onValueChange={setSelectedChannel}>
            <SelectTrigger>
              <SelectValue placeholder="Select channel" />
            </SelectTrigger>
            <SelectContent>
              {channels.map((channel) => (
                <SelectItem key={channel.name} value={channel.name}>
                  {channel.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={personaTimeSpentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="timeSpent"
              fill="#82ca9d"
              name="Time Spent (mins)"
              label={{ position: "top", fontSize: 14 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const AudienceInsights = () => {
  return (
    <div>
      <ChannelTimeSpentChart />
      <PersonaTimeSpentChart />
    </div>
  );
};

export default AudienceInsights;
