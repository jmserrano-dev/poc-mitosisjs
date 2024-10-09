import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { StackLayoutProps } from "./stack-layout.model";
import { cls, toPx } from "../../utils/styles";

useMetadata({
  importCSS: "./stack-layout.css",
  isAttachedToShadowDom: true,
});

useDefaultProps<StackLayoutProps>({
  spacing: 8,
});

export default function AcmeStackLayout(props: StackLayoutProps) {
  return (
    <div
      class={cls("mt-stack-layout", props.nativeClass)}
      style={{ "--mt-stack-layout-spacing": toPx(props.spacing) }}
    >
      {props.children}
    </div>
  );
}
