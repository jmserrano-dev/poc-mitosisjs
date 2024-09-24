import { Component, Prop, h } from '@stencil/core';
import { IconProps } from './icon.model';

@Component({
  tag: 'st-icon',
  styleUrl: 'icon.css',
  shadow: false,
})
export class Icon {
  @Prop() name!: IconProps['name'];
  @Prop() size?: IconProps['size'] = 's';

  render() {
    return (
      <span
        class={{
          'st-icon': true,
          [`icon-${this.name}`]: true,
          'st-icon--size-s': this.size === 's',
          'st-icon--size-m': this.size === 'm',
          'st-icon--size-l': this.size === 'l',
        }}
      ></span>
    );
  }
}
