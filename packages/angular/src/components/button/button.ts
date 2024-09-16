import { Output, EventEmitter, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { cls } from "../../utils/styles";
import { ButtonProps, ButtonState } from "./button.model";

@Component({
  selector: "x-button",
  template: `
    <button
      [attr.id]="id"
      [attr.type]="type"
      [class]='cls("x-button", className)'
      (click)="handleClick()"
    >
      <span>Hello</span>
      <img src="/assets/circle-heat-svgrepo-com.svg" />
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .x-button {
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

      /* .x-button:hover {
          color: #ffffff;
          background-color: var(--my-color, #333333);
        }

        .x-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.2);
        } */
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export default class Button {
  cls = cls;

  @Input() id!: ButtonProps["id"];
  @Input() type!: ButtonProps["type"];
  @Input() className!: ButtonProps["className"];

  @Output() xClick = new EventEmitter();

  handleClick() {
    if (this.xClick) this.xClick.emit();
  }
}
