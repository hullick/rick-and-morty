import * as d3 from 'd3';

import { Component } from '@angular/core';

@Component({ template: '' })
export abstract class GenericGraphicComponent {
  private _svg: any;
  protected margin = 50;
  protected _width = 750;
  protected _height = 400;

  constructor() {}

  protected get width(): number {
    return this._width - this.margin * 2;
  }

  protected get height(): number {
    return this._height - this.margin * 2;
  }

  protected abstract get selector(): string;
  protected abstract get data(): any[];

  public get svg(): any {
    if (!this._svg) this.createSvg();

    return this._svg;
  }

  protected createSvg(): void {
    this._svg = d3
      .select(this.selector)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }
}
