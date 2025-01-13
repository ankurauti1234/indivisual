'use client'

import { useState } from 'react'
import { ResponsiveSankey } from '@nivo/sankey'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Import the data
const personaFlows = {
  "urban-budget": {
    nodes: [
      { name: "Kantipur TV" },
      { name: "News24" },
      { name: "Image Channel" },
      { name: "AP1 TV" },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 3247,
        sourceName: "Kantipur TV",
        targetName: "News24",
      },
      {
        source: 0,
        target: 2,
        value: 1856,
        sourceName: "Kantipur TV",
        targetName: "Image Channel",
      },
      {
        source: 1,
        target: 2,
        value: 2134,
        sourceName: "News24",
        targetName: "Image Channel",
      },
      {
        source: 1,
        target: 3,
        value: 1523,
        sourceName: "News24",
        targetName: "AP1 TV",
      },
      {
        source: 2,
        target: 3,
        value: 978,
        sourceName: "Image Channel",
        targetName: "AP1 TV",
      },
    ],
  },
  "urban-professional": {
    nodes: [
      { name: "Nepal Television" },
      { name: "Prime Times" },
      { name: "Avenues TV" },
      { name: "Himalaya TV" },
      { name: "Galaxy 4K" },
      { name: "ABC News" },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 4521,
        sourceName: "Nepal Television",
        targetName: "Prime Times",
      },
      {
        source: 0,
        target: 2,
        value: 3876,
        sourceName: "Nepal Television",
        targetName: "Avenues TV",
      },
      {
        source: 1,
        target: 3,
        value: 2945,
        sourceName: "Prime Times",
        targetName: "Himalaya TV",
      },
      {
        source: 1,
        target: 4,
        value: 1876,
        sourceName: "Prime Times",
        targetName: "Galaxy 4K",
      },
      {
        source: 2,
        target: 4,
        value: 2341,
        sourceName: "Avenues TV",
        targetName: "Galaxy 4K",
      },
      {
        source: 3,
        target: 5,
        value: 1654,
        sourceName: "Himalaya TV",
        targetName: "ABC News",
      },
      {
        source: 4,
        target: 5,
        value: 2187,
        sourceName: "Galaxy 4K",
        targetName: "ABC News",
      },
    ],
  },
  "rural-aspiring": {
    nodes: [
      { name: "NTV" },
      { name: "Image Channel" },
      { name: "Mountain TV" },
      { name: "Nepal Television" },
      { name: "TV Today" },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 5634,
        sourceName: "NTV",
        targetName: "Image Channel",
      },
      {
        source: 0,
        target: 2,
        value: 4321,
        sourceName: "NTV",
        targetName: "Mountain TV",
      },
      {
        source: 1,
        target: 2,
        value: 3567,
        sourceName: "Image Channel",
        targetName: "Mountain TV",
      },
      {
        source: 1,
        target: 3,
        value: 2876,
        sourceName: "Image Channel",
        targetName: "Nepal Television",
      },
      {
        source: 2,
        target: 3,
        value: 1987,
        sourceName: "Mountain TV",
        targetName: "Nepal Television",
      },
      {
        source: 2,
        target: 4,
        value: 2345,
        sourceName: "Mountain TV",
        targetName: "TV Today",
      },
      {
        source: 3,
        target: 4,
        value: 1543,
        sourceName: "Nepal Television",
        targetName: "TV Today",
      },
    ],
  },
  "value-homemaker": {
    nodes: [
      { name: "Kantipur TV" },
      { name: "Himalaya TV" },
      { name: "Prime Times" },
      { name: "News24" },
      { name: "Nepal Television" },
      { name: "ABC News" },
      { name: "TV Today" },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 4123,
        sourceName: "Kantipur TV",
        targetName: "Himalaya TV",
      },
      {
        source: 0,
        target: 2,
        value: 3654,
        sourceName: "Kantipur TV",
        targetName: "Prime Times",
      },
      {
        source: 1,
        target: 3,
        value: 2987,
        sourceName: "Himalaya TV",
        targetName: "News24",
      },
      {
        source: 1,
        target: 4,
        value: 1876,
        sourceName: "Himalaya TV",
        targetName: "Nepal Television",
      },
      {
        source: 2,
        target: 4,
        value: 2345,
        sourceName: "Prime Times",
        targetName: "Nepal Television",
      },
      {
        source: 3,
        target: 5,
        value: 1654,
        sourceName: "News24",
        targetName: "ABC News",
      },
      {
        source: 4,
        target: 5,
        value: 1234,
        sourceName: "Nepal Television",
        targetName: "ABC News",
      },
      {
        source: 4,
        target: 6,
        value: 987,
        sourceName: "Nepal Television",
        targetName: "TV Today",
      },
      {
        source: 5,
        target: 6,
        value: 1432,
        sourceName: "ABC News",
        targetName: "TV Today",
      },
    ],
  },
};



// Define a color map for the channels
const channelColors = {
  "Kantipur TV": "#1F77B4", // Strong blue
  News24: "#FF7F0E", // Bright orange
  "Image Channel": "#2CA02C", // Fresh green
  "AP1 TV": "#D62728", // Vivid red
  "Nepal Television": "#9467BD", // Rich purple
  "Prime Times": "#8C564B", // Earthy brown
  "Avenues TV": "#E377C2", // Soft pink
  "Himalaya TV": "#17BECF", // Cool cyan
  "Galaxy 4K": "#BCBD22", // Olive yellow
  "ABC News": "#AEC7E8", // Light blue
  NTV: "#FF9896", // Peach
  "Mountain TV": "#C5B0D5", // Lavender
  "TV Today": "#98DF8A", // Pastel green
};


// Helper function to format the persona key for display
const formatPersonaName = (key) => {
  return key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default function TVChannelSankeyChart() {
  const [selectedPersona, setSelectedPersona] = useState("urban-budget")

  // Transform the data for the selected persona to match Nivo's expected format
  const transformData = (persona) => {
    return {
      nodes: persona.nodes.map((node, index) => ({
        id: node.name,
        color: channelColors[node.name] || '#000000'
      })),
      links: persona.links.map(link => ({
        source: link.sourceName,
        target: link.targetName,
        value: link.value
      }))
    }
  }

  const data = transformData(personaFlows[selectedPersona])

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>TV Channel Audience Flow</CardTitle>
        <CardDescription>Visualizing audience flow across TV channels for various personas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={setSelectedPersona} defaultValue={selectedPersona}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a persona" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(personaFlows).map((persona) => (
                <SelectItem key={persona} value={persona}>
                  {formatPersonaName(persona)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div style={{ height: '500px' }}>
          <ResponsiveSankey
            data={data}
            margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
            align="justify"
            colors={(node) => node.color || '#000000'}
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="horizontal"
            labelPadding={16}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: 'right-to-left',
                itemsSpacing: 2,
                itemTextColor: '#999',
                symbolSize: 14,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000'
                    }
                  }
                ]
              }
            ]}
            tooltip={({ node, link }) => (
              <div
                style={{
                  background: 'white',
                  padding: '9px 12px',
                  border: '1px solid #ccc',
                }}
              >
                {link ? (
                  <>
                    <strong>{link.source}</strong> → <strong>{link.target}</strong>: {link.value.toLocaleString()} viewers
                  </>
                ) : (
                  <>
                    <strong>{node.id}</strong>: {node.value.toLocaleString()} viewers
                  </>
                )}
              </div>
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}

