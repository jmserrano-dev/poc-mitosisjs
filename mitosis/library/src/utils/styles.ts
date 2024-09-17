export type ClassNameArg = string | { [key: string]: boolean | undefined } | undefined;

export const cls = (...args: ClassNameArg[]) => {
  let result = "";

  args.forEach((arg, index) => {
    if (arg) {
      if (typeof arg === "string") {
        result += `${arg} `;
      } else {
        for (const key in arg) {
          if (arg[key]) {
            result += `${key} `;
          }
        }
      }
    }
  });

  return result.trim();
};
