import {
  onMount,
  Show,
  useDefaultProps,
  useMetadata,
  useStore,
} from "@builder.io/mitosis";

import { InputProps } from "./input-text.model";
import { cls } from "../../utils/styles";
import AcmeIcon from "../icon/icon.lite";

useMetadata({
  importCSS: "./input-text.css",
  isAttachedToShadowDom: true,
});

useDefaultProps<InputProps>({
  nativeDisabled: false,
  invalid: false,
  shadow: false,
  type: "input",
  size: "m",
});

export default function AcmeInputText(props: InputProps) {
  const state = useStore({
    text: "",
    get numberOfCharacters() {
      return state.text.length;
    },
    clear() {
      state.text = "";
    },
    update(event: any) {
      state.text = event.target.value;
    },
  });

  onMount(() => {
    state.text = props.value;
  });

  return (
    <div class="mt-input">
      <input
        value={state.text}
        maxLength={props.maxLength}
        disabled={props.nativeDisabled}
        placeholder={props.nativePlaceholder}
        class={cls("mt-input__field", {
          "mt-input__field--shadow": props.shadow,
          "mt-input__field--invalid": props.invalid,
          "mt-input__field--size-xs": props.size === "xs",
          "mt-input__field--size-s": props.size === "s",
          "mt-input__field--size-m": props.size === "m",
        })}
        onInput={(event) => state.update(event)}
      />
      <AcmeIcon
        size="m"
        name="close-sm"
        nativeClass="mt-input__icon"
        nativeClick={state.clear}
      />

      {/* TODO: jserrano - Extract to other component */}
      <Show when={props.maxLength}>
        <span class="mt-input__counter">
          {state.numberOfCharacters}/{props.maxLength}
        </span>
      </Show>
    </div>
  );
}
