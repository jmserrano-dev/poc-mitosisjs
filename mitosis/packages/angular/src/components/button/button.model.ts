import { GlobalProps } from "../../shared/global.props";
import { ClickEvent, ClickEventProps } from "../../shared/click-event.props";
export const ButtonTypeList = ["button", "reset", "submit"] as const;
export type ButtonTypeType = (typeof ButtonTypeList)[number];
export type ButtonProps = GlobalProps & ClickEventProps<HTMLButtonElement> & {
  type?: ButtonTypeType;
};
export type ButtonState = {
  handleClick: (/*event: ClickEvent<HTMLButtonElement>*/) => void;
}