import { useDefaultProps, useMetadata } from "@builder.io/mitosis";

import { ButtonProps } from "./button.model";
import { cls } from "../../utils/styles";

useMetadata({
  importCSS: "./button.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-button" },
});

useDefaultProps<ButtonProps>({
  type: "button",
  variant: "primary",
  status: "default",
  shadow: "on",
  size: "M",
});

export default function Button(props: ButtonProps) {
  // const state = useStore<ButtonState>({
  //   handleClick: () => {
  //     if (props.xClick) props.xClick();
  //   },
  // });

  return (
    <button
      type={props.type}
      class={cls("mt-button", {
        "mt-button--primary": props.variant === "primary",
        "mt-button--secondary": props.variant === "secondary",
        "mt-button--disabled": props.status === "disabled",
        "mt-button--shadow-on": props.shadow === "on",
        "mt-button--size-m": props.size === "M",
        "mt-button--size-s": props.size === "S",
      })}
      // onClick={() => state.handleClick()}
    >
      {props.children}
    </button>
  );
}
