const InputTypeList = ["input", "search", "textarea"] as const;
const InputSizeList = ["xs", "s", "m"] as const;

export type InputProps = {
  type?: (typeof InputTypeList)[number];
  size?: (typeof InputSizeList)[number];
  shadow?: boolean;
  invalid?: boolean;
  nativeDisabled?: boolean;
  nativePlaceholder?: string;
};
