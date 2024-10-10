import { useMetadata } from "@builder.io/mitosis";

import { LabelProps } from "./label.model";
import { cls } from "../../../utils/styles";

useMetadata({
  importCSS: "./label.css",
  isAttachedToShadowDom: true,
});

export default function AcmeLabel(props: LabelProps) {
  return (
    <label for={props.nativeFor} class={cls("mt-label")}>
      {props.children}
    </label>
  );
}
