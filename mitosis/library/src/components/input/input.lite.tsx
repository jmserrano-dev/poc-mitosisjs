import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { InputProps } from "./input.model";
import { cls } from "../../utils/styles";
import Icon from "../icon/icon.lite";

useMetadata({
  importCSS: "./input.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-input" },
});

useDefaultProps<InputProps>({
  nativeDisabled: false,
  invalid: false,
  shadow: false,
  type: "input",
  size: "m",
});

export default function Input(props: InputProps) {
  return (
    <div class="mt-input">
      <input
        disabled={props.nativeDisabled}
        placeholder={props.nativePlaceholder}
        class={cls("mt-input__field", {
          "mt-input__field--shadow": props.shadow,
          "mt-input__field--invalid": props.invalid,
          "mt-input__field--size-xs": props.size === "xs",
          "mt-input__field--size-s": props.size === "s",
          "mt-input__field--size-m": props.size === "m",
        })}
      />
      <Icon nativeClass="mt-input__icon" name="close-sm" size="m" />
    </div>
  );
}
