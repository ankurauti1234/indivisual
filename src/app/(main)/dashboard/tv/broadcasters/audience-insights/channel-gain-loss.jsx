"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allChannels = [
  "Kantipur TV",
  "Nepal Television",
  "NTV",
  "Image Channel",
  "Avenues TV",
  "Himalaya TV",
  "News24",
  "Prime Times",
  "Mountain TV",
  "Galaxy 4K",
];

const ChannelFlowAnalysis = () => {
  const [sourceChannel, setSourceChannel] = useState("Nepal Television");
  const [mainChannel, setMainChannel] = useState("Kantipur TV");
  const [targetChannel, setTargetChannel] = useState("Image Channel");

  const generateFlowData = () => {
    const sourceLoss = Math.floor(Math.random() * 2000) + 1000;
    const targetGain = Math.floor(Math.random() * 2000) + 1000;

    return {
      nodes: [
        { id: sourceChannel },
        { id: mainChannel },
        { id: targetChannel },
      ],
      links: [
        {
          source: sourceChannel,
          target: mainChannel,
          value: sourceLoss,
          type: "loss",
        },
        {
          source: mainChannel,
          target: targetChannel,
          value: targetGain,
          type: "gain",
        },
      ],
    };
  };

  const [flowData, setFlowData] = useState(generateFlowData());

  useEffect(() => {
    setFlowData(generateFlowData());
  }, [sourceChannel, mainChannel, targetChannel]);

  const getAvailableChannels = (excludeChannels) => {
    return allChannels.filter((channel) => !excludeChannels.includes(channel));
  };

  const customColors = {
    [sourceChannel]: "#F93827",
    [mainChannel]: "#FF9D23",
    [targetChannel]: "#16C47F",
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Channel Audience Flow Analysis</CardTitle>
        <CardDescription>
          Analyze audience movement between TV channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium mb-2">Source Channel (Loss)</p>
            <Select value={sourceChannel} onValueChange={setSourceChannel}>
              <SelectTrigger>
                <SelectValue placeholder="Select source channel" />
              </SelectTrigger>
              <SelectContent>
                {getAvailableChannels([mainChannel, targetChannel]).map(
                  (channel) => (
                    <SelectItem key={channel} value={channel}>
                      {channel}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Main Channel</p>
            <Select value={mainChannel} onValueChange={setMainChannel}>
              <SelectTrigger>
                <SelectValue placeholder="Select main channel" />
              </SelectTrigger>
              <SelectContent>
                {getAvailableChannels([sourceChannel, targetChannel]).map(
                  (channel) => (
                    <SelectItem key={channel} value={channel}>
                      {channel}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Target Channel (Gain)</p>
            <Select value={targetChannel} onValueChange={setTargetChannel}>
              <SelectTrigger>
                <SelectValue placeholder="Select target channel" />
              </SelectTrigger>
              <SelectContent>
                {getAvailableChannels([sourceChannel, mainChannel]).map(
                  (channel) => (
                    <SelectItem key={channel} value={channel}>
                      {channel}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div style={{ height: "400px" }}>
          <ResponsiveSankey
            data={flowData}
            margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
            align="justify"
            colors={(node) => customColors[node.id] || "#000000"}
            nodeOpacity={1}
            nodeHoverOthersOpacity={0.35}
            nodeThickness={18}
            nodeSpacing={24}
            nodeBorderWidth={0}
            nodeBorderColor={{
              from: "color",
              modifiers: [["darker", 0.8]],
            }}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            linkContract={0.5}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1]],
            }}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: "right-to-left",
                itemsSpacing: 2,
                itemTextColor: "#999",
                symbolSize: 14,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
            tooltip={({ node, link }) => (
              <div
                style={{
                  background: "white",
                  padding: "9px 12px",
                  border: "1px solid #ccc",
                }}
              >
                {node ? (
                  <strong>{node.id}</strong>
                ) : (
                  <>
                    <strong>{link.source.id}</strong> →{" "}
                    <strong>{link.target.id}</strong>:{" "}
                    {link.value.toLocaleString()} viewers
                  </>
                )}
              </div>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelFlowAnalysis;
