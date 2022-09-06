import { Component, Input } from '@angular/core';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { GenericGraphicShape } from '../generic-graphic/generic-graphic.shape';

@Component({ template: '' })
export abstract class SVGImageShape extends GenericGraphicShape {
  @Input()
  public override config!: ComponentAttribute;

  protected override get nodeType(): string {
    return 'svg:image';
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected onCurrentDataChange(): void {
    this.plottedD3Element?.selection.attr('xlink:href', this.currentData.value);
  }
}
