export const channels = [
  {
    id: "ch1",
    name: "Radio Mirchi",
    logo: "/images/radio-mirchi.png",
  },
];

function createDateTime(hour, minute) {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

export const allPrograms =
  
  [
  // Channel 1 - Radio Mirchi
  {
    id: "ch1-1a",
    title: "Mirchi Morning",
    startTime: createDateTime(6, 0),
    endTime: createDateTime(6, 50),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Wake up to the latest hits and morning motivation",
  },
  {
    id: "ch1-ad1",
    title: "Colgate MaxFresh Ad",
    startTime: createDateTime(6, 50),
    endTime: createDateTime(6, 55),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-1b",
    title: "Mirchi Morning",
    startTime: createDateTime(6, 55),
    endTime: createDateTime(7, 45),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Continuing morning show with celebrity interviews",
  },
  {
    id: "ch1-ad2",
    title: "Flipkart Big Billion Days Ad",
    startTime: createDateTime(7, 45),
    endTime: createDateTime(7, 50),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-1c",
    title: "Mirchi Morning",
    startTime: createDateTime(7, 50),
    endTime: createDateTime(8, 40),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More morning entertainment and music",
  },
  {
    id: "ch1-ad3",
    title: "Amazon Prime Video Ad",
    startTime: createDateTime(8, 40),
    endTime: createDateTime(8, 45),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-2a",
    title: "What's Up, India",
    startTime: createDateTime(8, 45),
    endTime: createDateTime(9, 35),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Current affairs and trending topics discussion",
  },
  {
    id: "ch1-ad4",
    title: "Spotify Premium Ad",
    startTime: createDateTime(9, 35),
    endTime: createDateTime(9, 40),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-2b",
    title: "What's Up, India",
    startTime: createDateTime(9, 40),
    endTime: createDateTime(10, 30),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Continuing discussion on current affairs",
  },
  {
    id: "ch1-ad5",
    title: "Zomato Ad",
    startTime: createDateTime(10, 30),
    endTime: createDateTime(10, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-3a",
    title: "Mirchi Top 20",
    startTime: createDateTime(10, 35),
    endTime: createDateTime(11, 25),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Countdown of the top 20 songs of the week",
  },
  {
    id: "ch1-ad6",
    title: "Netflix India Ad",
    startTime: createDateTime(11, 25),
    endTime: createDateTime(11, 30),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-3b",
    title: "Mirchi Top 20",
    startTime: createDateTime(11, 30),
    endTime: createDateTime(12, 20),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Continuing the top 20 countdown",
  },
  {
    id: "ch1-ad7",
    title: "Pepsi Ad",
    startTime: createDateTime(12, 20),
    endTime: createDateTime(12, 25),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-4a",
    title: "Lunch Box Mirchi",
    startTime: createDateTime(12, 25),
    endTime: createDateTime(13, 15),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Relaxing music and light-hearted conversations",
  },
  {
    id: "ch1-ad8",
    title: "McDonald's Ad",
    startTime: createDateTime(13, 15),
    endTime: createDateTime(13, 20),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-4b",
    title: "Lunch Box Mirchi",
    startTime: createDateTime(13, 20),
    endTime: createDateTime(14, 10),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More lunchtime entertainment",
  },
  {
    id: "ch1-ad9",
    title: "Uber Eats Ad",
    startTime: createDateTime(14, 10),
    endTime: createDateTime(14, 15),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-5a",
    title: "Mirchi Afternoons",
    startTime: createDateTime(14, 15),
    endTime: createDateTime(15, 5),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Afternoon music and chat show",
  },
  {
    id: "ch1-ad10",
    title: "Myntra Fashion Sale Ad",
    startTime: createDateTime(15, 5),
    endTime: createDateTime(15, 10),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-5b",
    title: "Mirchi Afternoons",
    startTime: createDateTime(15, 10),
    endTime: createDateTime(16, 0),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More afternoon entertainment",
  },
  {
    id: "ch1-ad11",
    title: "PhonePe UPI Ad",
    startTime: createDateTime(16, 0),
    endTime: createDateTime(16, 5),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-6a",
    title: "Mirchi Drive Time",
    startTime: createDateTime(16, 5),
    endTime: createDateTime(16, 55),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Evening drive show with traffic updates and music",
  },
  {
    id: "ch1-ad12",
    title: "Tata Neu App Ad",
    startTime: createDateTime(16, 55),
    endTime: createDateTime(17, 0),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-6b",
    title: "Mirchi Drive Time",
    startTime: createDateTime(17, 0),
    endTime: createDateTime(17, 50),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More evening entertainment and traffic updates",
  },
  {
    id: "ch1-ad13",
    title: "Airtel 5G Ad",
    startTime: createDateTime(17, 50),
    endTime: createDateTime(17, 55),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-ad13a",
    title: "Dominos",
    startTime: createDateTime(17, 55),
    endTime: createDateTime(18, 0),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-ad13b",
    title: "Pantene Ad",
    startTime: createDateTime(18, 0),
    endTime: createDateTime(18, 5),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-7a",
    title: "Club Mirchi",
    startTime: createDateTime(18, 5),
    endTime: createDateTime(18, 45),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Night party with the latest dance hits",
  },
  {
    id: "ch1-ad14",
    title: "Pantene Ad",
    startTime: createDateTime(18, 45),
    endTime: createDateTime(18, 50),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-ad14a",
    title: "Domino's Pizza Ad",
    startTime: createDateTime(18, 50),
    endTime: createDateTime(18, 55),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-ad14b",
    title: "Bata",
    startTime: createDateTime(18, 55),
    endTime: createDateTime(19, 0),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-7b",
    title: "Club Mirchi",
    startTime: createDateTime(19, 0),
    endTime: createDateTime(19, 40),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More party hits and entertainment",
  },
  {
    id: "ch1-ad15",
    title: "Swiggy Super Ad",
    startTime: createDateTime(19, 40),
    endTime: createDateTime(19, 45),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-8a",
    title: "Purani Jeans",
    startTime: createDateTime(19, 45),
    endTime: createDateTime(20, 35),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Retro music and nostalgic conversations",
  },
  {
    id: "ch1-ad16",
    title: "MakeMyTrip Ad",
    startTime: createDateTime(20, 35),
    endTime: createDateTime(20, 40),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-8b",
    title: "Purani Jeans",
    startTime: createDateTime(20, 40),
    endTime: createDateTime(21, 30),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More retro hits and stories",
  },
  {
    id: "ch1-ad17",
    title: "Paytm Ad",
    startTime: createDateTime(21, 30),
    endTime: createDateTime(21, 35),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-9a",
    title: "Mirchi Love Guru",
    startTime: createDateTime(21, 35),
    endTime: createDateTime(22, 25),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "Relationship advice and romantic music",
  },
  {
    id: "ch1-ad18",
    title: "Amazon Great Indian Festival Ad",
    startTime: createDateTime(22, 25),
    endTime: createDateTime(22, 30),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-9b",
    title: "Mirchi Love Guru",
    startTime: createDateTime(22, 30),
    endTime: createDateTime(23, 20),
    duration: 50,
    type: "show",
    channel: "ch1",
    description: "More relationship stories and advice",
  },
  {
    id: "ch1-ad19",
    title: "Vicks VapoRub Ad",
    startTime: createDateTime(23, 20),
    endTime: createDateTime(23, 25),
    duration: 5,
    type: "ad",
    channel: "ch1",
  },
  {
    id: "ch1-10",
    title: "Mirchi After Hours",
    startTime: createDateTime(23, 25),
    endTime: createDateTime(6, 0),
    duration: 395,
    type: "show",
    channel: "ch1",
    description: "Soothing music for late-night listeners",
  },
];

