export const ButtonTypeList = ["button", "submit", "reset"] as const;
export const ButtonVariantList = ["primary", "secondary"] as const;
export const ButtonStatusList = ["default", "disabled"] as const;
export const ButtonSizeList = ["s", "m"] as const;

export type ButtonProps = {
  type?: (typeof ButtonTypeList)[number];
  variant?: (typeof ButtonVariantList)[number];
  status?: (typeof ButtonStatusList)[number];
  size?: (typeof ButtonSizeList)[number];
  shadow?: boolean;
  children?: any;
};

export type ButtonState = {
  handleClick: (/*event: ClickEvent<HTMLButtonElement>*/) => void;
};
