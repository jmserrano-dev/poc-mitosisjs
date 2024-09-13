import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface ButtonProps {
  children: any;
}

import { join } from "path";
import { readFileSync } from "fs";

@Component({
  selector: "button",
  template: `
    <button class="x-button"><ng-content></ng-content></button>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export default class Button {}
