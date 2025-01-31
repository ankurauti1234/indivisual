export const epgData = [
  // January 29, 2025
  {
    program: "Night Show",
    channel: "Radio Mirchi",
    id: "0014-20250129",
    date: "2025-01-29",
    start: "00:00:00",
    end: "02:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Midnight Deals",
    channel: "Radio Mirchi",
    id: "0015-20250129",
    date: "2025-01-29",
    start: "03:00:00",
    end: "03:04:59",
    type: "ad",
  },
  {
    program: "Early Morning Yoga",
    channel: "Radio Mirchi",
    id: "0016-20250129",
    date: "2025-01-29",
    start: "03:05:00",
    end: "05:59:59",
    type: "program",
  },
  {
    program: "Morning News",
    channel: "Radio Mirchi",
    id: "0001-20250129",
    date: "2025-01-29",
    start: "06:05:00",
    end: "06:59:59",
    type: "program",
  },
  {
    program: "Breakfast Show",
    channel: "Radio Mirchi",
    id: "0003-20250129",
    date: "2025-01-29",
    start: "07:05:00",
    end: "08:29:59",
    type: "program",
  },
  {
    program: "Cartoon Time",
    channel: "Red FM",
    id: "0007-20250129",
    date: "2025-01-29",
    start: "06:05:00",
    end: "07:29:59",
    type: "program",
  },
  {
    program: "Kids' Science Show",
    channel: "Red FM",
    id: "0009-20250129",
    date: "2025-01-29",
    start: "07:35:00",
    end: "08:04:59",
    type: "program",
  },

  // January 30, 2025
  {
    program: "Night Show",
    channel: "Radio Mirchi",
    id: "0014-20250130",
    date: "2025-01-30",
    start: "00:00:00",
    end: "02:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Midnight Deals",
    channel: "Radio Mirchi",
    id: "0015-20250130",
    date: "2025-01-30",
    start: "03:00:00",
    end: "03:04:59",
    type: "ad",
  },
  {
    program: "Early Morning Yoga",
    channel: "Radio Mirchi",
    id: "0016-20250130",
    date: "2025-01-30",
    start: "03:05:00",
    end: "05:59:59",
    type: "program",
  },
  {
    program: "Morning News",
    channel: "Radio Mirchi",
    id: "0001-20250130",
    date: "2025-01-30",
    start: "06:05:00",
    end: "06:59:59",
    type: "program",
  },
  {
    program: "Breakfast Show",
    channel: "Radio Mirchi",
    id: "0003-20250130",
    date: "2025-01-30",
    start: "07:05:00",
    end: "08:29:59",
    type: "program",
  },
  {
    program: "Cartoon Time",
    channel: "Red FM",
    id: "0007-20250130",
    date: "2025-01-30",
    start: "06:05:00",
    end: "07:29:59",
    type: "program",
  },
  {
    program: "Kids' Science Show",
    channel: "Red FM",
    id: "0009-20250130",
    date: "2025-01-30",
    start: "07:35:00",
    end: "08:04:59",
    type: "program",
  },

  // January 31, 2025
  {
    program: "Night Show",
    channel: "Radio Mirchi",
    id: "0014-20250131",
    date: "2025-01-31",
    start: "00:00:00",
    end: "02:59:59",
    type: "program",
  },
  {
    program: "Ad Break - Midnight Deals",
    channel: "Radio Mirchi",
    id: "0015-20250131",
    date: "2025-01-31",
    start: "03:00:00",
    end: "03:04:59",
    type: "ad",
  },
  {
    program: "Early Morning Yoga",
    channel: "Radio Mirchi",
    id: "0016-20250131",
    date: "2025-01-31",
    start: "03:05:00",
    end: "05:59:59",
    type: "program",
  },
  {
    program: "Morning News",
    channel: "Radio Mirchi",
    id: "0001-20250131",
    date: "2025-01-31",
    start: "06:05:00",
    end: "06:59:59",
    type: "program",
  },
  {
    program: "Breakfast Show",
    channel: "Radio Mirchi",
    id: "0003-20250131",
    date: "2025-01-31",
    start: "07:05:00",
    end: "08:29:59",
    type: "program",
  },
  {
    program: "Cartoon Time",
    channel: "Red FM",
    id: "0007-20250131",
    date: "2025-01-31",
    start: "06:05:00",
    end: "07:29:59",
    type: "program",
  },
  {
    program: "Kids' Science Show",
    channel: "Red FM",
    id: "0009-20250131",
    date: "2025-01-31",
    start: "07:35:00",
    end: "08:04:59",
    type: "program",
  },
];

// Update the mergeAdjacentPrograms function to handle dates
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
      lastProgram.date === data[i].date &&
      lastProgram.end === data[i].start
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
export const timeToMinutes = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 60 + minutes + seconds / 60;
};

export const processedEpgData = mergeAdjacentPrograms(epgData);
