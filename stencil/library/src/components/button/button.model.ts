import { GlobalProps } from '../../shared/global.props';
import { ClickEventProps } from '../../shared/click-event.props';

export const ButtonTypeList = ['button', 'reset', 'submit'] as const;

export type ButtonTypeType = (typeof ButtonTypeList)[number];

export type ButtonProps = GlobalProps &
  ClickEventProps & {
    type?: ButtonTypeType;
  };

export type ButtonState = {
  handleClick: (/*event: ClickEvent<HTMLButtonElement>*/) => void;
};
