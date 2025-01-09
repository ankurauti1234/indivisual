export const channels = [
  {
    id: "ch1",
    name: "News Channel",
    logo: "/images/news.webp",
  },
  {
    id: "ch2",
    name: "Entertainment",
    logo: "/images/entertainment.webp",
  },
  {
    id: "ch3",
    name: "Sports Channel",
    logo: "/images/sports.webp",
  },
//   {
//     id: "ch4",
//     name: "Sports Channel",
//     logo: "/images/sports.webp",
//   },
];

function createDateTime(hour, minute) {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

export const programs = [
  // Channel 1 - News Channel (6:00 AM - 6:00 AM next day)
  {
    id: "ch1-1a",
    title: "Morning News",
    startTime: createDateTime(6, 0),
    endTime: createDateTime(7, 30),
    duration: 90,
    type: "show",
    channel: "ch1",
    description: "Start your day with the latest news",
  },
  {
    id: "ch1-ad1",
    title: "Advertisement Block",
    startTime: createDateTime(7, 30),
    endTime: createDateTime(7, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-1b",
    title: "Morning News",
    startTime: createDateTime(7, 35),
    endTime: createDateTime(9, 0),
    duration: 85,
    type: "show",
    channel: "ch1",
    description: "Continuing morning news coverage",
  },
  {
    id: "ch1-ad2",
    title: "Advertisement Block",
    startTime: createDateTime(9, 0),
    endTime: createDateTime(9, 5),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-2",
    title: "Business Report",
    startTime: createDateTime(9, 5),
    endTime: createDateTime(9, 55),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Daily financial updates and market analysis",
  },
  {
    id: "ch1-ad3",
    title: "Advertisement Block",
    startTime: createDateTime(9, 55),
    endTime: createDateTime(10, 0),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-3a",
    title: "World News Hour",
    startTime: createDateTime(10, 0),
    endTime: createDateTime(10, 30),
    duration: 30,
    type: "show",
    channel: "ch1",
    description: "International news coverage",
  },
  {
    id: "ch1-ad4",
    title: "Advertisement Block",
    startTime: createDateTime(10, 30),
    endTime: createDateTime(10, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-3b",
    title: "World News Hour",
    startTime: createDateTime(10, 35),
    endTime: createDateTime(11, 0),
    duration: 25,
    type: "show",
    channel: "ch1",
    description: "Continuing international coverage",
  },
  {
    id: "ch1-4a",
    title: "Political Round Table",
    startTime: createDateTime(11, 0),
    endTime: createDateTime(11, 45),
    duration: 45,
    type: "show",
    channel: "ch1",
    description: "Expert analysis of current political events",
  },
  {
    id: "ch1-ad5",
    title: "Advertisement Block",
    startTime: createDateTime(11, 45),
    endTime: createDateTime(11, 50),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-4b",
    title: "Political Round Table",
    startTime: createDateTime(11, 50),
    endTime: createDateTime(12, 30),
    duration: 40,
    type: "show",
    channel: "ch1",
    description: "Continuing political analysis",
  },
  {
    id: "ch1-ad6",
    title: "Advertisement Block",
    startTime: createDateTime(12, 30),
    endTime: createDateTime(12, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-5a",
    title: "Afternoon News",
    startTime: createDateTime(12, 35),
    endTime: createDateTime(13, 45),
    duration: 70,
    type: "show",
    channel: "ch1",
    description: "Afternoon news updates",
  },
  {
    id: "ch1-ad7",
    title: "Advertisement Block",
    startTime: createDateTime(13, 45),
    endTime: createDateTime(13, 50),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-5b",
    title: "Afternoon News",
    startTime: createDateTime(13, 50),
    endTime: createDateTime(15, 0),
    duration: 70,
    type: "show",
    channel: "ch1",
    description: "Continuing afternoon coverage",
  },
  {
    id: "ch1-ad8",
    title: "Advertisement Block",
    startTime: createDateTime(15, 0),
    endTime: createDateTime(15, 5),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-6a",
    title: "Evening Report",
    startTime: createDateTime(15, 5),
    endTime: createDateTime(16, 30),
    duration: 85,
    type: "show",
    channel: "ch1",
    description: "Evening news coverage",
  },
  {
    id: "ch1-ad9",
    title: "Advertisement Block",
    startTime: createDateTime(16, 30),
    endTime: createDateTime(16, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-6b",
    title: "Evening Report",
    startTime: createDateTime(16, 35),
    endTime: createDateTime(18, 0),
    duration: 85,
    type: "show",
    channel: "ch1",
    description: "Continuing evening coverage",
  },
  {
    id: "ch1-7a",
    title: "Prime Time News",
    startTime: createDateTime(18, 0),
    endTime: createDateTime(19, 25),
    duration: 85,
    type: "show",
    channel: "ch1",
    description: "Prime time news coverage",
  },
  {
    id: "ch1-ad10",
    title: "Advertisement Block",
    startTime: createDateTime(19, 25),
    endTime: createDateTime(19, 30),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-7b",
    title: "Prime Time News",
    startTime: createDateTime(19, 30),
    endTime: createDateTime(21, 0),
    duration: 90,
    type: "show",
    channel: "ch1",
    description: "Continuing prime time coverage",
  },
  {
    id: "ch1-8a",
    title: "Night News",
    startTime: createDateTime(21, 0),
    endTime: createDateTime(22, 25),
    duration: 85,
    type: "show",
    channel: "ch1",
    description: "Late night news updates",
  },
  {
    id: "ch1-ad11",
    title: "Advertisement Block",
    startTime: createDateTime(22, 25),
    endTime: createDateTime(22, 30),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-8b",
    title: "Night News",
    startTime: createDateTime(22, 30),
    endTime: createDateTime(0, 0),
    duration: 90,
    type: "show",
    channel: "ch1",
    description: "Continuing late night coverage",
  },
  {
    id: "ch1-9a",
    title: "News Rewind",
    startTime: createDateTime(0, 0),
    endTime: createDateTime(2, 55),
    duration: 175,
    type: "show",
    channel: "ch1",
    description: "Recap of daily news",
  },
  {
    id: "ch1-ad12",
    title: "Advertisement Block",
    startTime: createDateTime(2, 55),
    endTime: createDateTime(3, 0),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-9b",
    title: "News Rewind",
    startTime: createDateTime(3, 0),
    endTime: createDateTime(6, 0),
    duration: 180,
    type: "show",
    channel: "ch1",
    description: "Continuing news recap",
  },

  // Channel 2 - Entertainment (6:00 AM - 6:00 AM next day)
  {
    id: "ch2-1a",
    title: "Morning Show",
    startTime: createDateTime(6, 0),
    endTime: createDateTime(7, 25),
    duration: 85,
    type: "show",
    channel: "ch2",
    description: "Celebrity interviews and entertainment news",
  },
  {
    id: "ch2-ad1",
    title: "Advertisement Block",
    startTime: createDateTime(7, 25),
    endTime: createDateTime(7, 30),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-1b",
    title: "Morning Show",
    startTime: createDateTime(7, 30),
    endTime: createDateTime(8, 0),
    duration: 30,
    type: "show",
    channel: "ch2",
    description: "More celebrity interviews",
  },
  {
    id: "ch2-2a",
    title: "Cooking Show",
    startTime: createDateTime(8, 0),
    endTime: createDateTime(8, 25),
    duration: 25,
    type: "show",
    channel: "ch2",
    description: "Learn to cook with celebrity chefs",
  },
  {
    id: "ch2-ad2",
    title: "Advertisement Block",
    startTime: createDateTime(8, 25),
    endTime: createDateTime(8, 30),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-2b",
    title: "Cooking Show",
    startTime: createDateTime(8, 30),
    endTime: createDateTime(9, 0),
    duration: 30,
    type: "show",
    channel: "ch2",
    description: "More cooking demonstrations",
  },
  {
    id: "ch2-3a",
    title: "Reality Show",
    startTime: createDateTime(9, 0),
    endTime: createDateTime(9, 25),
    duration: 25,
    type: "show",
    channel: "ch2",
    description: "Popular reality TV series",
  },
  {
    id: "ch2-ad3",
    title: "Advertisement Block",
    startTime: createDateTime(9, 25),
    endTime: createDateTime(9, 30),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-3b",
    title: "Reality Show",
    startTime: createDateTime(9, 30),
    endTime: createDateTime(10, 0),
    duration: 30,
    type: "show",
    channel: "ch2",
    description: "Continuing reality TV drama",
  },
  {
    id: "ch2-4a",
    title: "Movie Time",
    startTime: createDateTime(10, 0),
    endTime: createDateTime(10, 55),
    duration: 55,
    type: "show",
    channel: "ch2",
    description: "Featured movie of the day",
  },
  {
    id: "ch2-ad4",
    title: "Advertisement Block",
    startTime: createDateTime(10, 55),
    endTime: createDateTime(11, 0),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-4b",
    title: "Movie Time",
    startTime: createDateTime(11, 0),
    endTime: createDateTime(12, 0),
    duration: 60,
    type: "show",
    channel: "ch2",
    description: "Conclusion of featured movie",
  },
  {
    id: "ch2-5a",
    title: "Afternoon Drama",
    startTime: createDateTime(12, 0),
    endTime: createDateTime(12, 55),
    duration: 55,
    type: "show",
    channel: "ch2",
    description: "Popular drama series",
  },
  {
    id: "ch2-ad5",
    title: "Advertisement Block",
    startTime: createDateTime(12, 55),
    endTime: createDateTime(13, 0),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-5b",
    title: "Afternoon Drama",
    startTime: createDateTime(13, 0),
    endTime: createDateTime(14, 0),
    duration: 60,
    type: "show",
    channel: "ch2",
    description: "Continuing drama series",
  },
  {
    id: "ch2-6a",
    title: "Game Show",
    startTime: createDateTime(14, 0),
    endTime: createDateTime(14, 55),
    duration: 55,
    type: "show",
    channel: "ch2",
    description: "Interactive game show",
  },
  {
    id: "ch2-ad6",
    title: "Advertisement Block",
    startTime: createDateTime(14, 55),
    endTime: createDateTime(15, 0),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-6b",
    title: "Game Show",
    startTime: createDateTime(15, 0),
    endTime: createDateTime(16, 0),
    duration: 60,
    type: "show",
    channel: "ch2",
    description: "Final rounds of game show",
  },
  {
    id: "ch2-7a",
    title: "Prime Time Series",
    startTime: createDateTime(16, 0),
    endTime: createDateTime(17, 25),
    duration: 85,
    type: "show",
    channel: "ch2",
    description: "Popular prime time series",
  },
  {
    id: "ch2-ad7",
    title: "Advertisement Block",
    startTime: createDateTime(17, 25),
    endTime: createDateTime(17, 30),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-7b",
    title: "Prime Time Series",
    startTime: createDateTime(17, 30),
    endTime: createDateTime(19, 0),
    duration: 90,
    type: "show",
    channel: "ch2",
    description: "Continuing prime time drama",
  },
  {
    id: "ch2-8a",
    title: "Evening Movie",
    startTime: createDateTime(19, 0),
    endTime: createDateTime(20, 25),
    duration: 85,
    type: "show",
    channel: "ch2",
    description: "Featured evening movie",
  },
  {
    id: "ch2-ad8",
    title: "Advertisement Block",
    startTime: createDateTime(20, 25),
    endTime: createDateTime(20, 30),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-8b",
    title: "Evening Movie",
    startTime: createDateTime(20, 30),
    endTime: createDateTime(22, 0),
    duration: 90,
    type: "show",
    channel: "ch2",
    description: "Conclusion of evening movie",
  },
  {
    id: "ch2-9a",
    title: "Late Night Show",
    startTime: createDateTime(22, 0),
    endTime: createDateTime(22, 55),
    duration: 55,
    type: "show",
    channel: "ch2",
    description: "Late night entertainment",
  },
  {
    id: "ch2-ad9",
    title: "Advertisement Block",
    startTime: createDateTime(22, 55),
    endTime: createDateTime(23, 0),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-9b",
    title: "Late Night Show",
    startTime: createDateTime(23, 0),
    endTime: createDateTime(0, 0),
    duration: 60,
    type: "show",
    channel: "ch2",
    description: "Continuing late night entertainment",
  },
  {
    id: "ch2-10a",
    title: "Night Time Reruns",
    startTime: createDateTime(0, 0),
    endTime: createDateTime(2, 55),
    duration: 175,
    type: "show",
    channel: "ch2",
    description: "Replay of popular shows",
  },
  {
    id: "ch2-ad10",
    title: "Advertisement Block",
    startTime: createDateTime(2, 55),
    endTime: createDateTime(3, 0),
    duration: 5,
    type: "ad",
    channel: "ch2",
  },
  {
    id: "ch2-10b",
    title: "Night Time Reruns",
    startTime: createDateTime(3, 0),
    endTime: createDateTime(6, 0),
    duration: 180,
    type: "show",
    channel: "ch2",
    description: "More popular show reruns",
  },

  // Channel 3 - Sports Channel (6:00 AM - 6:00 AM next day)
  {
    id: "ch3-1a",
    title: "Morning Sports Highlights",
    startTime: createDateTime(6, 0),
    endTime: createDateTime(7, 0),
    duration: 60,
    type: "show",
    channel: "ch3",
    description: "Highlights from yesterday's sports events",
  },
  {
    id: "ch3-ad1",
    title: "Advertisement Block",
    startTime: createDateTime(7, 0),
    endTime: createDateTime(7, 5),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-1b",
    title: "Morning Sports Highlights",
    startTime: createDateTime(7, 5),
    endTime: createDateTime(8, 0),
    duration: 55,
    type: "show",
    channel: "ch3",
    description: "Continued highlights from yesterday's sports events",
  },
  {
    id: "ch3-2a",
    title: "Live Soccer Match Pre-Game Analysis",
    startTime: createDateTime(8, 0),
    endTime: createDateTime(8, 30),
    duration: 30,
    type: "show",
    channel: "ch3",
    description: "Pre-match analysis and predictions for today's soccer match",
  },
  {
    id: "ch3-ad2",
    title: "Advertisement Block",
    startTime: createDateTime(8, 30),
    endTime: createDateTime(8, 35),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-2b",
    title: "Live Soccer Match",
    startTime: createDateTime(8, 35),
    endTime: createDateTime(10, 35),
    duration: 120,
    type: "show",
    channel: "ch3",
    description: "Live coverage of today's soccer match",
  },
  {
    id: "ch3-ad3",
    title: "Advertisement Block",
    startTime: createDateTime(10, 35),
    endTime: createDateTime(10, 40),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-3",
    title: "Post-Match Analysis",
    startTime: createDateTime(10, 40),
    endTime: createDateTime(11, 30),
    duration: 50,
    type: "show",
    channel: "ch3",
    description: "In-depth analysis of the match and player performances",
  },
  {
    id: "ch3-4",
    title: "Sports Documentary",
    startTime: createDateTime(11, 30),
    endTime: createDateTime(13, 0),
    duration: 90,
    type: "show",
    channel: "ch3",
    description: "Inspirational stories from the world of sports",
  },
  {
    id: "ch3-ad4",
    title: "Advertisement Block",
    startTime: createDateTime(13, 0),
    endTime: createDateTime(13, 5),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-5",
    title: "Live Tennis Match",
    startTime: createDateTime(13, 5),
    endTime: createDateTime(15, 5),
    duration: 120,
    type: "show",
    channel: "ch3",
    description: "Live coverage of today's tennis tournament",
  },
  {
    id: "ch3-ad5",
    title: "Advertisement Block",
    startTime: createDateTime(15, 5),
    endTime: createDateTime(15, 10),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-6",
    title: "Sports Talk Show",
    startTime: createDateTime(15, 10),
    endTime: createDateTime(16, 30),
    duration: 80,
    type: "show",
    channel: "ch3",
    description: "Debates and discussions on trending sports topics",
  },
  {
    id: "ch3-ad6",
    title: "Advertisement Block",
    startTime: createDateTime(16, 30),
    endTime: createDateTime(16, 35),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-7",
    title: "Evening Sports Highlights",
    startTime: createDateTime(16, 35),
    endTime: createDateTime(18, 0),
    duration: 85,
    type: "show",
    channel: "ch3",
    description: "Summary of sports events from the day",
  },
  {
    id: "ch3-ad7",
    title: "Advertisement Block",
    startTime: createDateTime(18, 0),
    endTime: createDateTime(18, 5),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-8",
    title: "Live Basketball Match",
    startTime: createDateTime(18, 5),
    endTime: createDateTime(20, 5),
    duration: 120,
    type: "show",
    channel: "ch3",
    description: "Live coverage of today's basketball game",
  },
  {
    id: "ch3-ad8",
    title: "Advertisement Block",
    startTime: createDateTime(20, 5),
    endTime: createDateTime(20, 10),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-9",
    title: "Late Night Sports Recap",
    startTime: createDateTime(20, 10),
    endTime: createDateTime(22, 0),
    duration: 110,
    type: "show",
    channel: "ch3",
    description: "Comprehensive review of today's sports highlights",
  },
  //   {
  //     id: "ch3-10",
  //     title: "Classic Sports Moments",
  //     startTime: createDateTime(22, 0),
  //     endTime: createDateTime(0, 0),
  //     duration: 120,
  //     type: "show",
  //     channel: "ch3",
  //     description: "Relive iconic moments from sports history",
  //   },
  {
    id: "ch3-9a",
    title: "Late Night Show",
    startTime: createDateTime(22, 0),
    endTime: createDateTime(22, 55),
    duration: 55,
    type: "show",
    channel: "ch3",
    description: "Late night entertainment",
  },
  {
    id: "ch3-ad9",
    title: "Advertisement Block",
    startTime: createDateTime(22, 55),
    endTime: createDateTime(23, 0),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-9b",
    title: "Late Night Show",
    startTime: createDateTime(23, 0),
    endTime: createDateTime(0, 0),
    duration: 60,
    type: "show",
    channel: "ch3",
    description: "Continuing late night entertainment",
  },
  {
    id: "ch3-10a",
    title: "Teleshopping",
    startTime: createDateTime(0, 0),
    endTime: createDateTime(2, 55),
    duration: 175,
    type: "show",
    channel: "ch3",
    description: "Replay of popular shows",
  },
  {
    id: "ch3-ad10",
    title: "Advertisement Block",
    startTime: createDateTime(2, 55),
    endTime: createDateTime(3, 0),
    duration: 5,
    type: "ad",
    channel: "ch3",
  },
  {
    id: "ch3-10c",
    title: "Night Time Reruns",
    startTime: createDateTime(3, 0),
    endTime: createDateTime(4, 35),
    duration: 180,
    type: "show",
    channel: "ch3",
    description: "More popular show reruns",
  },
  {
    id: "ch3-ad10a",
    title: "Advertisement Block",
    startTime: createDateTime(4, 35),
    endTime: createDateTime(4, 40),
    duration: 5,
    type: "ad",
    channel: "ch3",
    description: "More popular show reruns",
  },

  {
    id: "ch3-10e",
    title: "Night Time Reruns",
    startTime: createDateTime(4, 40),
    endTime: createDateTime(6, 0),
    duration: 180,
    type: "show",
    channel: "ch3",
    description: "More popular show reruns",
  },
];

export const allPrograms = programs;