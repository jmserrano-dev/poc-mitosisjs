import { Show, useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { ValidationProps } from "./validation.model";
import AcmeIcon from "../../commons/icon/icon.lite";
import { cls } from "../../../utils/styles";

useMetadata({
  importCSS: "./validation.css",
  isAttachedToShadowDom: true,
});

useDefaultProps<ValidationProps>({
  variant: "default",
});

export default function AcmeValidation(props: ValidationProps) {
  return (
    <span
      class={cls("mt-validation", {
        "mt-validation--error": props.variant === "error",
        "mt-validation--warning": props.variant === "warning",
        "mt-validation--default": props.variant === "default",
      })}
    >
      <Show when={props.variant === "warning"}>
        <AcmeIcon name="alert-triangle" size="s" />
      </Show>

      <Show when={props.variant === "error"}>
        <AcmeIcon name="alert-circle" size="s" />
      </Show>

      <em class="mt-validation__message">{props.children}</em>
    </span>
  );
}
