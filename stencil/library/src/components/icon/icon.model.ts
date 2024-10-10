export const IconNameList = [
  "alert-circle",
  "alert-triangle",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "close-sm",
  "search",
] as const;
export const IconSizeList = ["s", "m", "l"] as const;

export type IconProps = {
  name: (typeof IconNameList)[number];
  size?: (typeof IconSizeList)[number];
};
