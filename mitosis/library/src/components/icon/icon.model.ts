export const IconNameList = ["arrow_down", "arrow_left", "arrow_right", "arrow_up"] as const;
export const IconSizeList = ["s", "m", "l"] as const;

export type IconProps = {
  name?: (typeof IconNameList)[number];
  size?: (typeof IconSizeList)[number];
};
