export const IconNameList = [
  "alert-circle",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "close-sm",
] as const;

export const IconSizeList = ["s", "m", "l"] as const;

export type IconProps = {
  name?: (typeof IconNameList)[number];
  size?: (typeof IconSizeList)[number];
  nativeClass?: string;
};
