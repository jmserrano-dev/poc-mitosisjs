export type IconsFontId =
  | "arrow_down"
  | "arrow_left"
  | "arrow_right"
  | "arrow_up";

export type IconsFontKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp";

export enum IconsFont {
  ArrowDown = "arrow_down",
  ArrowLeft = "arrow_left",
  ArrowRight = "arrow_right",
  ArrowUp = "arrow_up",
}

export const ICONS_FONT_CODEPOINTS: { [key in IconsFont]: string } = {
  [IconsFont.ArrowDown]: "61697",
  [IconsFont.ArrowLeft]: "61698",
  [IconsFont.ArrowRight]: "61699",
  [IconsFont.ArrowUp]: "61700",
};
