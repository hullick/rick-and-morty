import { Component, Input } from '@angular/core';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { TextShape } from '../text/text.shape';

@Component({ template: '' })
export abstract class TypedTextShape extends TextShape {
  @Input()
  public override config!: ComponentAttribute;

  abstract get type(): string;

  protected override get nodeType(): string {
    return 'text';
  }

  protected override onCurrentDataChange(): void {
    super.onCurrentDataChange();

    this.plottedD3Element?.selection
      .append('tspan')
      .attr('font-weight', 700)
      .text(`${this.type}: `)
      .lower();
  }
}
