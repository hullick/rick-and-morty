import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GenericGraphicComponent } from '../generic-graphic/generic-graphic.component';

@Component({
  selector: 'rem-network-force',
  templateUrl: './network-force.component.html',
  styleUrls: ['./network-force.component.scss'],
})
export class NetworkForceComponent
  extends GenericGraphicComponent
  implements OnInit
{
  constructor() {
    super();
  }

  protected get data(): [] {
    return [];
  }

  protected get selector(): string {
    return 'figure#bar';
  }

  ngOnInit(): void {
    this.svg
      .append('rect')
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('width', 600)
      .attr('height', 40)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');

    var arc = d3.symbol().type(d3.symbolTriangle);

    var triangle = this.svg
      .append('path')
      .attr('d', arc)
      .attr('fill', 'red')
      .attr('stroke', '#000')
      .attr('stroke-width', 1);

    this.svg.append('circle')
      .style('fill', 'orange')
      .attr('cx', 150)
      .attr('r', function () {
        return 10 + Math.random() * 40;
      });
  }
}
