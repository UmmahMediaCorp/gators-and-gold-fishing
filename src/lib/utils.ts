export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const easings = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  quartOut: [0.25, 1, 0.5, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
  quartInOut: [0.76, 0, 0.24, 1] as const,
};
