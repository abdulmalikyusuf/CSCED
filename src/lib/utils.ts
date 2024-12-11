import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Detect Closest Edge
// from https://codepen.io/johnstew/pen/zxYJZP?editors=0010
const closestEdge = (x, y, w, h) => {
  const topEdgeDist = distMetric(x, y, w / 2, 0);
  const bottomEdgeDist = distMetric(x, y, w / 2, h);
  const min = Math.min(topEdgeDist, bottomEdgeDist);
  return min === topEdgeDist ? "top" : "bottom";
};

// Distance Formula
// from https://codepen.io/johnstew/pen/zxYJZP?editors=0010
const distMetric = (x, y, x2, y2) => {
  const xDiff = x - x2;
  const yDiff = y - y2;
  return xDiff * xDiff + yDiff * yDiff;
};

export { closestEdge, distMetric };

function parsePrismicField(field: any) {
  field = field[0];
  if (field.type.startsWith("heading") || field.type === "paragraph")
    return field.text;
}

export function formatNumber(value: number | string) {
  return new Intl.NumberFormat("en-GB", {
    style: "decimal",
    notation: "compact",
    compactDisplay: "short",
  }).format(Number(value));
}

function formatPhoneNumber(phoneNumber: string) {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Ensure it starts with '+234'
  if (!cleaned.startsWith("234")) {
    throw new Error("Invalid number format. Must start with +234.");
  }

  // Extract parts of the phone number
  const countryCode = "+234";
  const mainNumber = cleaned.slice(3); // Remove the '234' prefix
  const part1 = mainNumber.slice(0, 3); // First 3 digits
  const part2 = mainNumber.slice(3, 7); // Next 4 digits
  const part3 = mainNumber.slice(7, 11); // Last 4 digits

  // Format and return the phone number
  return `${countryCode} ${part1} ${part2} ${part3}`;
}

export { parsePrismicField, formatPhoneNumber };
