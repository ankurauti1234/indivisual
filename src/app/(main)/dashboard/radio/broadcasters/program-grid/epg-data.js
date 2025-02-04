export const epgData = [
  {
    program: "Late Night Chill",
    channel: "Radio Mirchi",
    id: "0020-20250203",
    date: "2025-02-03",
    start: "00:00:00",
    end: "00:59:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Night Essentials",
    channel: "Radio Mirchi",
    id: "0021-20250203",
    date: "2025-02-03",
    start: "01:00:00",
    end: "01:04:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Night Essentials",
    channel: "Radio Mirchi",
    id: "0022-20250203",
    date: "2025-02-03",
    start: "01:05:00",
    end: "02:29:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Midnight Deals",
    channel: "Radio Mirchi",
    id: "0023-20250203",
    date: "2025-02-03",
    start: "02:30:00",
    end: "02:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Early Morning Melodies",
    channel: "Radio Mirchi",
    id: "0024-20250203",
    date: "2025-02-03",
    start: "02:35:00",
    end: "04:29:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Health & Fitness",
    channel: "Radio Mirchi",
    id: "0025-20250203",
    date: "2025-02-03",
    start: "04:30:00",
    end: "04:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Morning Yoga",
    channel: "Radio Mirchi",
    id: "0026-20250203",
    date: "2025-02-03",
    start: "04:35:00",
    end: "05:59:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Fresh Start",
    channel: "Radio Mirchi",
    id: "0027-20250203",
    date: "2025-02-03",
    start: "06:00:00",
    end: "06:04:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Morning News",
    channel: "Radio Mirchi",
    id: "0028-20250203",
    date: "2025-02-03",
    start: "06:05:00",
    end: "06:59:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Market Updates",
    channel: "Radio Mirchi",
    id: "0029-20250203",
    date: "2025-02-03",
    start: "07:00:00",
    end: "07:04:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Breakfast Show",
    channel: "Radio Mirchi",
    id: "0030-20250203",
    date: "2025-02-03",
    start: "07:05:00",
    end: "08:29:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Morning Energy",
    channel: "Radio Mirchi",
    id: "0031-20250203",
    date: "2025-02-03",
    start: "08:30:00",
    end: "08:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Music Hour",
    channel: "Radio Mirchi",
    id: "0032-20250203",
    date: "2025-02-03",
    start: "08:35:00",
    end: "09:29:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Morning Motivation",
    channel: "Radio Mirchi",
    id: "0033-20250203",
    date: "2025-02-03",
    start: "09:30:00",
    end: "09:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Talk Show - Trending Now",
    channel: "Radio Mirchi",
    id: "0034-20250203",
    date: "2025-02-03",
    start: "09:35:00",
    end: "10:29:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Shopping Specials",
    channel: "Radio Mirchi",
    id: "0035-20250203",
    date: "2025-02-03",
    start: "10:30:00",
    end: "10:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Interactive Radio Quiz",
    channel: "Radio Mirchi",
    id: "0036-20250203",
    date: "2025-02-03",
    start: "10:35:00",
    end: "11:29:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Ad Break - Lunchtime Offers",
    channel: "Radio Mirchi",
    id: "0037-20250203",
    date: "2025-02-03",
    start: "11:30:00",
    end: "11:34:59",
    type: "ad",
    audio: "/sounds/radio.mp3",
  },
  {
    program: "Midday Hits",
    channel: "Radio Mirchi",
    id: "0038-20250203",
    date: "2025-02-03",
    start: "11:35:00",
    end: "11:59:59",
    type: "program",
    audio: "/sounds/radio.mp3",
  },
]

export const mergeAdjacentPrograms = (data) => {
  const merged = []
  for (let i = 0; i < data.length; i++) {
    if (merged.length === 0) {
      merged.push(data[i])
      continue
    }

    const lastProgram = merged[merged.length - 1]
    if (
      lastProgram.channel === data[i].channel &&
      lastProgram.program === data[i].program &&
      lastProgram.date === data[i].date &&
      lastProgram.type === data[i].type &&
      lastProgram.end === data[i].start
    ) {
      // Merge programs
      lastProgram.end = data[i].end
      // Merge IDs
      lastProgram.id = `${lastProgram.id},${data[i].id}`
    } else {
      merged.push(data[i])
    }
  }
  return merged
}

export const timeToMinutes = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number)
  return hours * 60 + minutes + seconds / 60
}

export const processedEpgData = mergeAdjacentPrograms(epgData)

