import { Component, Input } from '@angular/core';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { GenericGraphicShape } from '../generic-graphic/generic-graphic.shape';

@Component({ template: '' })
export abstract class TextShape extends GenericGraphicShape {
  @Input()
  public override config!: ComponentAttribute;

  protected override get nodeType(): string {
    return 'text';
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.plottedD3Element?.selection.text(this.currentData.value ?? '');
  }

  protected onCurrentDataChange(): void {
    this.plottedD3Element?.selection.text(this.currentData.value ?? '');
  }
}
