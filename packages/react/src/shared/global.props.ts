export type GlobalProps = {
  /**
   * default slot
   */

  children?: any;

  /**
   * React specific for adding className to the component.
   */
  className?: string;

  /**
   * [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) is used to link to the elements that describe the element with the set attribute.
   */
  describedbyid?: string;

  /**
   * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.
   */
  id?: string;

  /**
   * React specific for render process.
   */
  key?: string;
}