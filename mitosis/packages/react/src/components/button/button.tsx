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
        className={cls("mt-button", props.className)}
        onClick={(event) => handleClick()}
      >
        {props.children}
      </button>

      <style>{`.mt-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 20px;

  font-size: 14px;
  font-weight: 500;

  color: #333333;
  background-color: transparent;
  border: 1px solid #333333;
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background-color: var(--my-color, #333333);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.2);
  }

  & img {
    width: 30px;
  }
}

`}</style>
    </>
  );
}

export default Button;
