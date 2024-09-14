"use client";
import * as React from "react";
import { cls } from "../../utils/styles";
import { ButtonProps, ButtonState } from "./button.model";

function Button(props: ButtonProps) {
  function handleClick() {
    if (props.xClick) props.xClick();
  }

  return (
    <>
      <button
        id={props.id}
        type={props.type}
        className={cls("x-button", props.className)}
        onClick={(event) => handleClick()}
      >
        {props.children}
      </button>

      <style>{`.x-button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  background-color: transparent;
  border: 1px solid #333333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.x-button:hover {
  color: #ffffff;
  background-color: var(--my-color, #333333);
}

.x-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.2);
}

`}</style>
    </>
  );
}

export default Button;
