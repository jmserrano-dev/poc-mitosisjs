export const ValidationVariantList = ["default", "error", "warning"] as const;

export type ValidationProps = {
  children?: any;
  variant?: (typeof ValidationVariantList)[number];
};
