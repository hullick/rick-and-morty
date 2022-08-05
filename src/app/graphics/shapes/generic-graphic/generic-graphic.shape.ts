import { Component, Input, OnInit } from '@angular/core';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({ template: '' })
export abstract class GenericGraphicShape implements OnInit {
  @Input()
  public config!: ComponentAttribute;

  @Input('parent-node-uuid-or-root-element-tag')
  public parentNodeUuidOrRootElement!: string;

  protected childs: Array<GenericGraphicShape> = [];

  protected plottedD3ElementUuid!: string;
  protected abstract get data(): any[];

  protected get nodeType(): string {
    return 'g';
  }

  public get plottedD3Element() {
    if (this.plottedD3ElementUuid)
      return this.d3ElementService.getPlottedD3Element(
        this.plottedD3ElementUuid
      );
    else throw new Error('Graphic component not plotted');
  }

  public get parentNodeAndGraphicComponent() {
    return this.d3ElementService.getPlottedD3Element(
      this.parentNodeUuidOrRootElement
    );
  }

  constructor(protected d3ElementService: D3ElementService) {}

  ngOnInit(): void {
    this.plottedD3ElementUuid = this.d3ElementService.registerD3Element(
      this.nodeType,
      this.parentNodeUuidOrRootElement,
      this
    );

    let parentNodeAndGraphicComponent = this.parentNodeAndGraphicComponent;

    if (parentNodeAndGraphicComponent) {
      parentNodeAndGraphicComponent.graphicComponent.childs.push(this);
    }

    this.applyAttrs();
  }

  protected applyAttrs() {
    if (this.config.attrs)
      Object.entries(this.config.attrs).forEach(([key, value]) => {
        this.plottedD3Element?.selection.attr(key, value);
      });
  }
}
