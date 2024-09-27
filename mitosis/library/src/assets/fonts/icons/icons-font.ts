export type IconsFontId =
  | "alert-circle"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "close-sm";

export type IconsFontKey =
  | "AlertCircle"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "CloseSm";

export enum IconsFont {
  AlertCircle = "alert-circle",
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  CloseSm = "close-sm",
}

export const ICONS_FONT_CODEPOINTS: { [key in IconsFont]: string } = {
  [IconsFont.AlertCircle]: "61697",
  [IconsFont.ArrowDown]: "61698",
  [IconsFont.ArrowLeft]: "61699",
  [IconsFont.ArrowRight]: "61700",
  [IconsFont.ArrowUp]: "61701",
  [IconsFont.CloseSm]: "61702",
};
