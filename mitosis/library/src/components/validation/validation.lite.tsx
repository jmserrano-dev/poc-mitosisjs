import { useMetadata } from "@builder.io/mitosis";

import { ValidationProps } from "./validation.model";
import Icon from "../icon/icon.lite";

useMetadata({
  importCSS: "./validation.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-label" },
});

export default function Validation(props: ValidationProps) {
  return (
    <span class="mt-validation">
      <Icon name="arrow_right" size="s" />
      <em class="mt-validation__message">{props.children}</em>
    </span>
  );
}
