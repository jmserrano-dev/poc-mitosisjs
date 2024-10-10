import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { ClusterLayoutProps } from "./cluster-layout.model";
import { cls, toPx } from "../../../utils/styles";

useMetadata({
  importCSS: "./cluster-layout.css",
  isAttachedToShadowDom: true,
});

useDefaultProps<ClusterLayoutProps>({
  justify: "start",
  spacing: 8,
});

export default function AcmeClusterLayout(props: ClusterLayoutProps) {
  return (
    <div
      class={cls("mt-cluster-layout", props.nativeClass)}
      style={{
        "--mt-cluster-layout-spacing": toPx(props.spacing),
        "--mt-cluster-layout-justify": props.justify,
      }}
    >
      {props.children}
    </div>
  );
}
