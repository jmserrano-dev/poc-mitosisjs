import * as React from "react";

export interface ButtonProps {
  children: any;
}

import { join } from "path";
import { readFileSync } from "fs";

function Button(props: ButtonProps) {
  return <button className="x-button">{props.children}</button>;
}

export default Button;
