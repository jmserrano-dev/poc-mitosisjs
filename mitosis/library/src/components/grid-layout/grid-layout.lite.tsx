import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { GridLayoutProps } from "./grid-layout.model";
import { cls, toPx } from "../../utils/styles";

useMetadata({
  importCSS: "./grid-layout.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-grid-layout" },
});

useDefaultProps<GridLayoutProps>({
  min: 300,
  spacing: 8,
});

export default function GridLayout(props: GridLayoutProps) {
  return (
    <div
      class={cls("mt-grid-layout", props.nativeClass)}
      style={{
        "--mt-grid-layout-min": toPx(props.min),
        "--mt-grid-layout-spacing": toPx(props.spacing),
      }}
    >
      {props.children}
    </div>
  );
}
