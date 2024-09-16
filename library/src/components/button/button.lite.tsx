import { useMetadata, useStore } from "@builder.io/mitosis";

import { cls } from "../../utils/styles";
import { ButtonProps, ButtonState } from "./button.model";

useMetadata({
  importCSS: "./button.css",
  isAttachedToShadowDom: true,
  angular: { selector: "x-button" },
});

export default function Button(props: ButtonProps) {
  const state = useStore<ButtonState>({
    handleClick: () => {
      if (props.xClick) props.xClick();
    },
  });

  return (
    <button
      id={props.id}
      type={props.type}
      class={cls("x-button", props.className)}
      onClick={() => state.handleClick()}
    >
      <span>Hello</span>
      <img src={"/assets/circle-heat-svgrepo-com.svg"} />
      {props.children}
    </button>
  );
}
