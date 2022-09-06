import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Character } from 'src/app/schemas/character';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';
import { RickAndMortyService } from 'src/app/services/rick-and-morty/rick-and-morty.service';
import { SVGGraphicShape } from '../shapes/svg-graphic/svg-graphic.shape';
import * as d3 from 'd3';
import { Link } from 'src/app/d3';
// import ForceGraph from './teste.js';

const FORCES = {
  LINKS: 1 / 50,
  COLLISION: 1,
  CHARGE: -1,
};

@Component({
  selector: 'rem-network-force',
  templateUrl: './network-force.component.html',
  styleUrls: ['./network-force.component.scss'],
})
export class NetworkForceComponent extends SVGGraphicShape implements OnInit {
  // protected mouseOverId: boolean = false;

  // protected _characterId: any = null;

  // public nodes: Node[] = [];
  // public links: Link[] = [];

  constructor(
    protected remApiService: RickAndMortyService,
    protected characterCardService: CharacterCardService,
    protected override d3ElementService: D3ElementService
  ) {
    super(d3ElementService);

    // // nodes, links, options: { width, height }

    // this.nodes = nodes;
    // this.links = links;

    // this.initSimulation(options);
  }

  // protected get data(): Array<Character> {
  //   return this.remApiService.getCharacters();
  // }

  // protected get characterId(): any {
  //   if (!this._characterId) {
  //   }

  //   return this._characterId;
  // }

  public get characterCardMicrocomponentAttrs(): ComponentAttribute {
    return {
      childs: {
        'background-box': {
          attrs: {
            width: 500,
            height: 200,
            fill: 'white',
            stroke: 'black',
            'stroke-width': '2px',
          },
        },
      },
    };
  }

  getColumn(number: number): number {
    return Math.floor(number / 25);
  }

  // override ngOnInit(): void {
  //   super.ngOnInit();
  // }

  // public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  // public simulation: d3.Simulation<any, any>;

  // connectNodes(source: number, target: number) {
  //   let link;

  //   if (!this.nodes[source] || !this.nodes[target]) {
  //     throw new Error('One of the nodes does not exist');
  //   }

  //   link = new Link(source, target);
  //   this.simulation.stop();
  //   this.links.push(link);
  //   this.simulation.alphaTarget(0.3).restart();

  //   this.initLinks();
  // }

  // initNodes() {
  //   if (!this.simulation) {
  //     throw new Error('simulation was not initialized yet');
  //   }

  //   this.simulation.nodes(this.nodes);
  // }

  // initLinks() {
  //   if (!this.simulation) {
  //     throw new Error('simulation was not initialized yet');
  //   }

  //   this.simulation.force(
  //     'links',
  //     d3
  //       .forceLink(this.links)
  //       .id((d: any) => d['id'])
  //       .strength(FORCES.LINKS)
  //   );
  // }

  // initSimulation(options: any) {
  //   if (!options || !options.width || !options.height) {
  //     throw new Error('missing options when initializing simulation');
  //   }

  //   /** Creating the simulation */
  //   if (!this.simulation) {
  //     const ticker = this.ticker;

  //     this.simulation = d3
  //       .forceSimulation()
  //       .force(
  //         'charge',
  //         d3.forceManyBody().strength((d: any) => FORCES.CHARGE * d['r'])
  //       )
  //       .force(
  //         'collide',
  //         d3
  //           .forceCollide()
  //           .strength(FORCES.COLLISION)
  //           .radius((d: any) => d['r'] + 5)
  //           .iterations(2)
  //       );

  //     // Connecting the d3 ticker to an angular event emitter
  //     this.simulation.on('tick', function () {
  //       ticker.emit(this);
  //     });

  //     this.initNodes();
  //     this.initLinks();
  //   }

  //   /** Updating the central force of the simulation */
  //   this.simulation.force(
  //     'centers',
  //     d3.forceCenter(options.width / 2, options.height / 2)
  //   );

  //   /** Restarting the simulation internal timer */
  //   this.simulation.restart();
  // }
}
