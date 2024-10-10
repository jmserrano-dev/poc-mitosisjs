import {
  onMount,
  Show,
  useDefaultProps,
  useMetadata,
  useStore,
} from "@builder.io/mitosis";

import { cls } from "../../../utils/styles";
import { InputProps } from "./input-text.model";
import AcmeIcon from "../../commons/icon/icon.lite";
import AcmeInputCounter from "../input-counter/input-counter.lite";
import AcmeStackLayout from "../../layouts/stack-layout/stack-layout.lite";
import AcmeClusterLayout from "../../layouts/cluster-layout/cluster-layout.lite";

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
  value: "",
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
    <AcmeStackLayout spacing={4}>
      <div class="mt-input">
        <input
          value={state.text}
          maxLength={props.maxLength}
          disabled={props.nativeDisabled}
          placeholder={props.nativePlaceholder}
          class={cls("mt-input__field", {
            "mt-input__field--shadow": props.shadow,
            "mt-input__field--invalid": props.invalid,
            "mt-input__field--size-m": props.size === "m",
            "mt-input__field--size-s": props.size === "s",
            "mt-input__field--size-xs": props.size === "xs",
            "mt-input__field--searchable": props.type === "search",
          })}
          onInput={(event) => state.update(event)}
        />

        <Show when={props.type === "search"}>
          <AcmeIcon size="m" name="search" nativeClass="mt-input__search" />
        </Show>

        <AcmeIcon
          size="m"
          name="close-sm"
          nativeClass="mt-input__clear"
          nativeClick={state.clear}
        />
      </div>

      <AcmeClusterLayout wrap="nowrap" spacing={2} justify="space-between">
        {props.chidren}

        <AcmeInputCounter
          length={state.numberOfCharacters}
          maxLength={props.maxLength}
        />
      </AcmeClusterLayout>
    </AcmeStackLayout>
  );
}
