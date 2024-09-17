/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@poc-stencil/library/components';

import { defineCustomElement as defineStButton } from '@poc-stencil/library/components/st-button.js';
@ProxyCmp({
  defineCustomElementFn: defineStButton,
  inputs: ['cssClasses', 'type']
})
@Component({
  selector: 'st-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cssClasses', 'type'],
  standalone: true
})
export class StButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked']);
  }
}


export declare interface StButton extends Components.StButton {

  clicked: EventEmitter<CustomEvent<any>>;
}


