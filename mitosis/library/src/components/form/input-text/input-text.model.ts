const InputTypeList = ["input", "search"] as const;
const InputSizeList = ["xs", "s", "m"] as const;

export type InputProps = {
  type?: (typeof InputTypeList)[number];
  size?: (typeof InputSizeList)[number];
  value?: string;
  shadow?: boolean;
  invalid?: boolean;
  maxLength?: number;
  nativeDisabled?: boolean;
  nativePlaceholder?: string;
  chidren?: any;
};
