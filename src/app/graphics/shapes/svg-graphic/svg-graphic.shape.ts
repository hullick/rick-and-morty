import { Component } from '@angular/core';
import { GenericGraphicShape } from '../generic-graphic/generic-graphic.shape';

@Component({ template: '' })
export abstract class SVGGraphicShape extends GenericGraphicShape {
  protected override get nodeType(): string {
    return 'svg';
  }

  protected onCurrentDataChange(): void {
    // TODO: Implement
  }
}
