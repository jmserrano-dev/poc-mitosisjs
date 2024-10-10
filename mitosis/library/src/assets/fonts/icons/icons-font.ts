export type IconsFontId =
  | "alert-circle"
  | "alert-triangle"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "close-sm"
  | "search";

export type IconsFontKey =
  | "AlertCircle"
  | "AlertTriangle"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "CloseSm"
  | "Search";

export enum IconsFont {
  AlertCircle = "alert-circle",
  AlertTriangle = "alert-triangle",
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  CloseSm = "close-sm",
  Search = "search",
}

export const ICONS_FONT_CODEPOINTS: { [key in IconsFont]: string } = {
  [IconsFont.AlertCircle]: "61697",
  [IconsFont.AlertTriangle]: "61698",
  [IconsFont.ArrowDown]: "61699",
  [IconsFont.ArrowLeft]: "61700",
  [IconsFont.ArrowRight]: "61701",
  [IconsFont.ArrowUp]: "61702",
  [IconsFont.CloseSm]: "61703",
  [IconsFont.Search]: "61704",
};
