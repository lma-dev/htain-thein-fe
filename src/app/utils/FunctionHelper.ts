export function generateUUID() {
  let uuid = "",
    i,
    random;
  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }
  return uuid;
}

export function changeFormatHumanTime(timestamp: Date | string | number): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(timestamp).toLocaleString(undefined, options);
}

export function getPriority(priority:string):string {
  switch (priority) {
    case "1":
      return "Low priority";
    case "2":
      return "Normal priority";
    case "3":
      return "High priority";
    default:
      return "Unknown priority";
  }
}

export function getVisibility(isVisible:number):string {
  switch (isVisible) {
    case 1:
      return "Publish";
    case 0:
      return "UnPublish";
    default:
      return "Unknown";
  }
}

export const getDefaultDueDate = (): Date => {
  const now = new Date();
  const futureDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Add 1 day (24 hours) in milliseconds
  return futureDate;
};

