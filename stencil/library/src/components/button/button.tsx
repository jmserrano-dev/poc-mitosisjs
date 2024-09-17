import { Component, Prop, h, Event } from '@stencil/core';
import { cls } from '../../utils/styles';
import { ButtonProps } from './button.model';

@Component({
  tag: 'st-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() type: ButtonProps['type'];
  @Prop() cssClasses: ButtonProps['cssClasses'];
  @Event() clicked: ButtonProps['clicked'];

  render() {
    return (
      <button
        type={this.type}
        class={cls('st-button', this.cssClasses)}
        onClick={event => {
          console.log('[STENCIL] CLICK', { event });
          this.clicked.emit(event);
        }}
      >
        {/* <img src={'/assets/circle-heat-svgrepo-com.svg'} /> */}
        <slot />
      </button>
    );
  }
}
