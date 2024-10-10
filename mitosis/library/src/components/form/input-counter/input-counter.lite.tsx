import { Show, useMetadata } from "@builder.io/mitosis";

import { InputCounterProps } from "./input-counter.model";

useMetadata({
  importCSS: "./input-counter.css",
  isAttachedToShadowDom: true,
});

export default function AcmeInputCounter(props: InputCounterProps) {
  return (
    <Show when={props.maxLength}>
      <span class="mt-input-counter">
        {props.length}/{props.maxLength}
      </span>
    </Show>
  );
}
