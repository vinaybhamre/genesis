import dayjs from "dayjs";

export function timeAgo(dateStr: string): string {
  const now = dayjs();
  const date = dayjs(dateStr);

  const seconds = Math.abs(now.diff(date, "second"));
  const minutes = Math.abs(now.diff(date, "minute"));
  const hours = Math.abs(now.diff(date, "hour"));
  const days = Math.abs(now.diff(date, "day"));
  const weeks = Math.abs(now.diff(date, "week"));
  const months = Math.abs(now.diff(date, "month"));
  const years = Math.abs(now.diff(date, "year"));

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  if (weeks < 4) return `${weeks}w`;
  if (months < 12) return `${months}mo`;
  return `${years}y`;
}
