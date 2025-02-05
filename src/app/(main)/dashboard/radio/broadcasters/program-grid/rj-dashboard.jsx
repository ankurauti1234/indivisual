import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Radio, Search, Trophy } from "lucide-react";

const RJDashboard = () => {
  const rjData = [
    { name: "RJ Anmol 🇮🇳", followers: 523582, username: "rjanmol27" },
    { name: "RJ Praveen", followers: 2510230, username: "rjpraveen" },
    { name: "Rj Kisna", followers: 1862141, username: "rjkisnaa" },
    { name: "RJ Princy Parikh", followers: 1652500, username: "princymirchilove" },
    { name: "Salil", followers: 367753, username: "salilacharya" },
    { name: "Archana L Pania", followers: 234396, username: "archanaapania" },
    { name: "RJ Harsh", followers: 119036, username: "loveseharsh" },
    { name: "RJ Raaj", followers: 54758, username: "ursrjraaj" },
    { name: "RJ Niyati", followers: 42336, username: "rj_niyati" },
    { name: "Ginnie Mahajan", followers: 24856, username: "rjginnie" }
  ].sort((a, b) => b.followers - a.followers);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = rjData.filter(rj =>
    rj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rj.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatFollowers = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getRankStyles = (index) => {
    if (index === 0) return "bg-yellow-100 text-yellow-700";
    if (index === 1) return "bg-gray-100 text-gray-700";
    if (index === 2) return "bg-orange-100 text-orange-700";
    return "bg-gray-50 text-gray-600";
  };

  return (
    <div className="m">
      <Card className=" mx-auto bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Radio className="w-8 h-8 text-purple-500" />
              <div>
                <CardTitle className="text-2xl font-bold">Top Radio RJs of India</CardTitle>
                <CardDescription>Instagram Influencers Ranking</CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Total RJs: {rjData.length}</span>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              className="pl-10 bg-white"
              placeholder="Search by name or username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="rounded-lg border bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-12 font-semibold">Rank</TableHead>
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Username</TableHead>
                  <TableHead className="text-right font-semibold">
                    <div className="flex items-center justify-end space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Followers</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((rj, index) => (
                  <TableRow key={rj.username} className="hover:bg-gray-50">
                    <TableCell>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${getRankStyles(index)}`}>
                        {index === 0 && <Trophy className="w-4 h-4" />}
                        {index > 0 && (index + 1)}
                      </div>
                    </TableCell>
                    <TableCell>
                    {rj.name}
                    </TableCell>
                    <TableCell className="text-blue-600">@{rj.username}</TableCell>
                    <TableCell className="text-right font-semibold">
                      {formatFollowers(rj.followers)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RJDashboard;