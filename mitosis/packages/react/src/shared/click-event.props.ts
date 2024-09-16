export type ClickEvent<T> = Partial<MouseEvent>;
export type ClickEventProps<T> = {
  /**
   * React specific onClick to pass to forward ref.
   */
  xClick?: (/*event: ClickEvent<T>*/) => void;
}