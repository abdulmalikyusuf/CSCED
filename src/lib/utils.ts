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

type Field =
  | {
      type: "heading1" | "paragraph";
      text: string;
      spans: [];
      direction: "ltr" | "rtl";
    }
  | Record<string, never>;

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

export { parsePrismicField };
