import { CalenderEventType } from "@/types/event";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = today.getDate();

const formatDate = (d: number) =>
  `${year}-${month}-${String(d).padStart(2, "0")}`;

export const todayEvents = [
  {
    id: "1",
    title: "Morning Standup",
    time: "9:00 AM - 9:30 AM",
    description: "Daily sync with the team",
  },
  {
    id: "2",
    title: "Design Review",
    time: "10:30 AM - 11:30 AM",
    description: "Review new UI proposals",
  },
  {
    id: "3",
    title: "Client Call",
    time: "12:00 PM - 1:00 PM",
    description: "Discuss project requirements",
  },
  {
    id: "4",
    title: "Lunch Break",
    time: "1:00 PM - 2:00 PM",
    description: "Take a break and recharge",
  },
  {
    id: "5",
    title: "Code Review",
    time: "2:30 PM - 3:30 PM",
    description: "Review PRs and give feedback",
  },
  {
    id: "6",
    title: "Backend Sync",
    time: "4:00 PM - 4:45 PM",
    description: "Discuss API changes",
  },
  {
    id: "7",
    title: "Gym",
    time: "6:00 PM - 7:00 PM",
    description: "Evening workout session",
  },
  {
    id: "8",
    title: "Dinner",
    time: "8:00 PM",
    description: "Dinner with family",
  },
  {
    id: "9",
    title: "Side Project",
    time: "9:00 PM - 10:30 PM",
    description: "Work on personal app",
  },
  {
    id: "10",
    title: "Read Book",
    time: "10:30 PM",
    description: "Read 20 pages",
  },
  {
    id: "11",
    title: "Plan Tomorrow",
    time: "11:00 PM",
    description: "Prepare next day's tasks",
  },
  {
    id: "12",
    title: "Sleep",
    description: "Get enough rest",
  },
];

export const events: Record<string, CalenderEventType[]> = {
  // today
  [formatDate(day)]: todayEvents,

  // scattered dates
  [formatDate(day - 2)]: [
    {
      id: "101",
      title: "Quick Sync",
      time: "11:00 AM",
      description: "Discuss blockers",
    },
  ],

  [formatDate(day - 1)]: [
    {
      id: "102",
      title: "UI Polish",
      time: "3:00 PM - 5:00 PM",
      description: "Refine feed screen UI",
    },
  ],

  [formatDate(day + 1)]: [
    {
      id: "103",
      title: "Planning Session",
      time: "10:00 AM",
      description: "Sprint planning",
    },
  ],

  [formatDate(day + 2)]: [
    {
      id: "104",
      title: "Doctor Visit",
      time: "6:00 PM",
    },
  ],

  [formatDate(day + 4)]: [
    {
      id: "105",
      title: "Team Lunch",
      time: "1:00 PM",
      description: "Lunch with team",
    },
  ],

  [formatDate(day + 6)]: [
    {
      id: "106",
      title: "Workshop",
      time: "9:00 AM - 12:00 PM",
    },
  ],

  [formatDate(day + 8)]: [
    {
      id: "107",
      title: "Movie Night",
      time: "8:00 PM",
    },
  ],

  [formatDate(day + 10)]: [
    {
      id: "108",
      title: "Weekend Trip",
      description: "Short getaway",
    },
  ],
};
