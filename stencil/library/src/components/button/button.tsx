import { Component, Prop, h } from '@stencil/core';
import { ButtonProps } from './button.model';

@Component({
  tag: 'st-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() type: ButtonProps['type'] = 'button';
  @Prop() variant: ButtonProps['variant'] = 'primary';
  @Prop() status: ButtonProps['status'] = 'default';
  @Prop() shadow: ButtonProps['shadow'] = 'on';
  @Prop() size: ButtonProps['size'] = 'M';

  render() {
    return (
      <button
        type={this.type}
        class={{
          'st-button': true,
          'st-button--primary': this.variant === 'primary',
          'st-button--secondary': this.variant === 'secondary',
          'st-button--disabled': this.status === 'disabled',
          'st-button--shadow-on': this.shadow === 'on',
          'st-button--size-m': this.size === 'M',
          'st-button--size-s': this.size === 'S',
        }}
        // onClick={event => {
        //   this.clicked.emit(event);
        // }}
      >
        <slot />
      </button>
    );
  }
}
