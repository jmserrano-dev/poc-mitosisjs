import { EventEmitter } from '@stencil/core';

export type ClickEvent<T = MouseEvent> = Partial<T>;

export type ClickEventProps<T = MouseEvent> = {
  clicked?: EventEmitter<T>;
};
