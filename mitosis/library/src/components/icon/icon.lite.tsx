import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { IconProps } from "./icon.model";
import { cls } from "../../utils/styles";

useMetadata({
  importCSS: "./icon.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-icon" },
});

useDefaultProps<IconProps>({
  size: "s",
});

export default function Icon(props: IconProps) {
  return (
    <span
      class={cls("mt-icon", "icon-" + props.name, props.nativeClass, {
        "mt-icon--size-s": props.size === "s",
        "mt-icon--size-m": props.size === "m",
        "mt-icon--size-l": props.size === "l",
      })}
    ></span>
  );
}
