import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { BoxLayoutProps } from "./box-layout.model";
import { cls, toPx } from "../../../utils/styles";

useMetadata({
  importCSS: "./box-layout.css",
  isAttachedToShadowDom: true,
});

useDefaultProps<BoxLayoutProps>({
  spacing: 8,
});

export default function AcmeBoxLayout(props: BoxLayoutProps) {
  return (
    <div
      class={cls("mt-box-layout", props.nativeClass)}
      style={{ "--mt-box-layout-spacing": toPx(props.spacing) }}
    >
      {props.children}
    </div>
  );
}
