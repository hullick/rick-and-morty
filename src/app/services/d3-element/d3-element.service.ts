import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as d3 from 'd3';
import { Selection } from 'd3';
import { GenericGraphicShape } from 'src/app/graphics/shapes/generic-graphic/generic-graphic.shape';

@Injectable({
  providedIn: 'root',
})
export class D3ElementService {
  protected plottedElements: Map<
    string,
    {
      selection: Selection<any, unknown, HTMLElement, any>;
      graphicComponent: GenericGraphicShape;
    }
  > = new Map();

  public registerD3Element(
    nodeType: string,
    parentNodeUuidOrRootElement: string,
    graphicComponent: GenericGraphicShape
  ): string {
    let parentNode = this.getPlottedD3Element(parentNodeUuidOrRootElement);

    if (parentNode) {
      return this.storeAndGetUuid(
        parentNode.selection.append(nodeType),
        graphicComponent
      );
    } else {
      return this.storeAndGetUuid(
        d3.select(parentNodeUuidOrRootElement).append(nodeType),
        graphicComponent
      );
    }
  }

  protected storeAndGetUuid(
    plottedElement: Selection<any, unknown, HTMLElement, any>,
    graphicComponent: GenericGraphicShape
  ): string {
    let uuid = UUID.UUID();

    this.plottedElements.set(uuid, {
      selection: plottedElement,
      graphicComponent: graphicComponent,
    });

    return uuid;
  }

  public getPlottedD3Element(uuid: string) {
    return this.plottedElements.get(uuid);
  }
}
