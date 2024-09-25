import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { ImposterLayoutProps } from "./imposter-layout.model";
import { cls, toPx } from "../../utils/styles";

useMetadata({
  importCSS: "./imposter-layout.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-imposter-layout" },
});

useDefaultProps<ImposterLayoutProps>({
  spacing: 8,
  variant: "center",
});

export default function ImposterLayout(props: ImposterLayoutProps) {
  return (
    <div
      class={cls("mt-imposter-layout", props.nativeClass, {
        "mt-imposter-layout--left": props.variant === "left",
        "mt-imposter-layout--right": props.variant === "right",
        "mt-imposter-layout--center": props.variant === "center",
      })}
      style={{ "--mt-imposter-layout-spacing": toPx(props.spacing) }}
    >
      {props.children}
    </div>
  );
}
