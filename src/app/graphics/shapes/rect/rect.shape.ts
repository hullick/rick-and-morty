import { Component } from '@angular/core';
import { GenericGraphicShape } from '../generic-graphic/generic-graphic.shape';

@Component({ template: '' })
export abstract class RectShape extends GenericGraphicShape {

  protected override get nodeType(): string {
    return 'rect';
  }

  protected onCurrentDataChange(): void {
    // TODO: Implement
  }
}
