import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models';
import * as d3 from 'd3';
import { end } from '@popperjs/core';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  // applyZoomableBehaviour(svgElement: any, containerElement: any) {
  //   let svg, container: any, zoomed, zoom;

  //   svg = d3.select(svgElement);
  //   container = d3.select(containerElement);

  //   zoomed = () => {
  //     const transform = d3.event.transform;
  //     container.attr(
  //       'transform',
  //       'translate(' +
  //         transform.x +
  //         ',' +
  //         transform.y +
  //         ') scale(' +
  //         transform.k +
  //         ')'
  //     );
  //   };

  //   zoom = d3.zoom().on('zoom', zoomed);
  //   svg.call(zoom);
  // }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(
    element: ElementRef['nativeElement'],
    node: Node,
    graph: ForceDirectedGraph
  ) {
    const d3element = d3.select(element);

    function started(event: any) {
      if (!event.active) {
        graph.simulation.alphaTarget(0.2).restart();
      }

      /** Preventing propagation of dragstart to parent elements */
      return false;
    }

    function dragged(event:any) {
      node.fx = event.x;
      node.fy = event.y;
    }

    function ended(event: any) {
      if (!event.active) {
        graph.simulation.alphaTarget(0);
      }

      node.fx = null;
      node.fy = null;
    }

    d3element.call(
      d3.drag()
      .on('start', started)
      .on('drag', dragged)
      .on('end', ended)
      );
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(
    nodes: Node[],
    links: Link[],
    options: { width: number; height: number }
  ) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }
}
45;
