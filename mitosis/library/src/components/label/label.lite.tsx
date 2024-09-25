import { useMetadata } from "@builder.io/mitosis";

import { LabelProps } from "./label.model";
import { cls } from "../../utils/styles";

useMetadata({
  importCSS: "./label.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-label" },
});

export default function Label(props: LabelProps) {
  return (
    <label for={props.nativeFor} class={cls("mt-label")}>
      {props.children}
    </label>
  );
}
