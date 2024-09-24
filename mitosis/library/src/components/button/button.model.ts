export const ButtonTypeList = ["button", "submit", "reset"] as const;
export const ButtonVariantList = ["primary", "secondary"] as const;
export const ButtonStatusList = ["default", "disabled"] as const;
export const ButtonShadowList = ["on", "off"] as const;
export const ButtonSizeList = ["s", "m"] as const;

export type ButtonProps = {
  type?: (typeof ButtonTypeList)[number];
  variant?: (typeof ButtonVariantList)[number];
  status?: (typeof ButtonStatusList)[number];
  shadow?: (typeof ButtonShadowList)[number];
  size?: (typeof ButtonSizeList)[number];
  children?: any;
};

export type ButtonState = {
  handleClick: (/*event: ClickEvent<HTMLButtonElement>*/) => void;
};
