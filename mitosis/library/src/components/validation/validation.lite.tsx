import { useMetadata } from "@builder.io/mitosis";

import { ValidationProps } from "./validation.model";
import AcmeIcon from "../icon/icon.lite";

useMetadata({
  importCSS: "./validation.css",
  isAttachedToShadowDom: true,
});

export default function AcmeValidation(props: ValidationProps) {
  return (
    <span class="mt-validation">
      <AcmeIcon name="alert-circle" size="s" />
      <em class="mt-validation__message">{props.children}</em>
    </span>
  );
}
