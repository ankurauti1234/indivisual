export const epgData = [
  // Channel One Data
  {
    program: "Night Show",
    channel: "Channel One",
    id: "0014",
    start: "00:00:00",
    end: "02:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Midnight Deals",
    channel: "Channel One",
    id: "0015",
    start: "03:00:00",
    end: "03:04:59",
    type: "ad",
  },
  {
    program: "Early Morning Yoga",
    channel: "Channel One",
    id: "0016",
    start: "03:05:00",
    end: "05:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Morning Energy",
    channel: "Channel One",
    id: "0017",
    start: "06:00:00",
    end: "06:04:59",
    type: "ad",
  },
  {
    program: "Morning News",
    channel: "Channel One",
    id: "0001",
    start: "06:05:00",
    end: "06:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Quick Update",
    channel: "Channel One",
    id: "0018",
    start: "07:00:00",
    end: "07:04:59",
    type: "ad",
  },
  {
    program: "Breakfast Show",
    channel: "Channel One",
    id: "0003",
    start: "07:05:00",
    end: "08:29:59",
    type: "program",
  },
  {
    program: "Weather Update",
    channel: "Channel One",
    id: "0004",
    start: "08:30:00",
    end: "08:34:59",
    type: "program",
  },
  {
    program: "Ad Break - Sunny Deals",
    channel: "Channel One",
    id: "0019",
    start: "08:35:00",
    end: "08:39:59",
    type: "ad",
  },
  {
    program: "Lifestyle Magazine",
    channel: "Channel One",
    id: "0006",
    start: "08:40:00",
    end: "09:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Stylish Offers",
    channel: "Channel One",
    id: "0020",
    start: "10:00:00",
    end: "10:04:59",
    type: "ad",
  },
  {
    program: "Health and Fitness",
    channel: "Channel One",
    id: "0021",
    start: "10:05:00",
    end: "11:59:59",
    type: "program",
  },

  // Channel Two Data
  {
    program: "Late Night Movie",
    channel: "Channel Two",
    id: "0022",
    start: "00:00:00",
    end: "02:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Movie Snacks",
    channel: "Channel Two",
    id: "0023",
    start: "03:00:00",
    end: "03:04:59",
    type: "ad",
  },
  {
    program: "Science Explorers",
    channel: "Channel Two",
    id: "0024",
    start: "03:05:00",
    end: "05:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Morning Inspiration",
    channel: "Channel Two",
    id: "0025",
    start: "06:00:00",
    end: "06:04:59",
    type: "ad",
  },
  {
    program: "Cartoon Time",
    channel: "Channel Two",
    id: "0007",
    start: "06:05:00",
    end: "07:29:59",
    type: "program",
  },
  {
    program: "Ad Break - Kids' Offers",
    channel: "Channel Two",
    id: "0026",
    start: "07:30:00",
    end: "07:34:59",
    type: "ad",
  },
  {
    program: "Kids' Science Show",
    channel: "Channel Two",
    id: "0009",
    start: "07:35:00",
    end: "08:04:59",
    type: "program",
  },
  {
    program: "Ad Break - Family Time",
    channel: "Channel Two",
    id: "0027",
    start: "08:05:00",
    end: "08:09:59",
    type: "ad",
  },
  {
    program: "Teen Drama Series",
    channel: "Channel Two",
    id: "0012",
    start: "08:10:00",
    end: "09:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Weekend Sales",
    channel: "Channel Two",
    id: "0028",
    start: "10:00:00",
    end: "10:04:59",
    type: "ad",
  },
  {
    program: "Teen Drama Series",
    channel: "Channel Two",
    id: "0013",
    start: "10:05:00",
    end: "11:59:59",
    type: "program",
  },
];

// Function to merge adjacent programs with same attributes
export const mergeAdjacentPrograms = (data) => {
  const merged = [];
  for (let i = 0; i < data.length; i++) {
    if (merged.length === 0) {
      merged.push(data[i]);
      continue;
    }

    const lastProgram = merged[merged.length - 1];
    if (
      lastProgram.channel === data[i].channel &&
      lastProgram.program === data[i].program &&
      // Either directly consecutive
      (lastProgram.end === data[i].start ||
        // Or with a gap, but on the same channel and program
        (timeToMinutes(lastProgram.end) < timeToMinutes(data[i].start) &&
          timeToMinutes(data[i].start) - timeToMinutes(lastProgram.end) < 60))
    ) {
      // Merge programs
      lastProgram.end = data[i].end;
    } else {
      merged.push(data[i]);
    }
  }
  return merged;
};

// Helper function to convert time to minutes
const timeToMinutes = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
};

export const processedEpgData = mergeAdjacentPrograms(epgData);
