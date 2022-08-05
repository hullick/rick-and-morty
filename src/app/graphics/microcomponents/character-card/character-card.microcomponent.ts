import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Selection } from 'd3';
import { GenericGraphicShape } from '../../shapes/generic-graphic/generic-graphic.shape';

@Component({
  selector: 'rem-character-card-microcomponent',
  templateUrl: './character-card.microcomponent.html',
  styleUrls: ['./character-card.microcomponent.scss'],
})
export class CharacterCardMicrocomponent
  extends GenericGraphicShape
  implements OnInit, AfterViewInit
{
  protected g: any;
  protected name: any;

  ngAfterViewInit(): void {
    let container = this;

    console.log(container.g.node().getBBox().height);

    this.name.attr('dy', container.g.node().getBBox().height);
  }

  protected nameElement:
    | Selection<SVGTextElement, unknown, HTMLElement, any>
    | undefined;

  protected get data(): any[] {
    return [];
  }

  override ngOnInit(): void {
    super.ngOnInit();

    // this.plottedD3Element?.selection
    //   .append('defs')
    //   .append('style')
    //   .attr('type', 'text/css').text(`
    //     .teste {
    //       fill: pink;
    //     }
    //   `);

    // this.plottedD3Element?.selection
    //   .append('rect')
    //   .attr('width', this.attrs.childs?.['rect'].width ?? 0)
    //   .attr('height', this.attrs.childs?.['rect'].height ?? 0)
    //   .attr('fill', 'white')
    //   .attr('stroke', 'black')
    //   .attr('stroke-width', 1.5);

    // this.plottedD3Element?.selection.attr(
    //   'transform',
    //   'translate(' + (0 + 100) + ',0)'
    // );

    // const infos = this.plottedD3Element?.selection.append('g');

    // this.g = infos

    // infos?.attr('x', (<any>this.attrs).width / 2)

    // let nameElement = infos?.append('text');

    // this.name = nameElement;

    // if (nameElement)
    //   nameElement
    //     .attr('dx', (<any>this.attrs).width / 2)
    //     .text('Ricky Sanchez')
    //     // .style('font-weight', '500')
    //     // .style('stroke-width', '1')
    //     .attr('class', 'rick_morty_font'); // <=== Here's the different line
    // // .style("text-shadow", "0 5px 0 #fff, 1px 0 0 #000, 0 -1px 0 #fff, -1px 0 0 #fff")
    // // .style('-webkit-text-stroke', '2px black')
    // // .style('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
    // // #d6e752

    // // nameElement?.node()?.classList.add('rick_morty_font');

    // let halfMinorSize =
    //   ((<any>this.attrs).width < (<any>this.attrs).height
    //     ? (<any>this.attrs).width
    //     : (<any>this.attrs).height) / 1.2;

    // this.plottedD3Element?.selection
    //   .append('svg:image')
    //   .attr('width', halfMinorSize)
    //   .attr('height', halfMinorSize)
    //   .attr('y', ((<any>this.attrs).height - halfMinorSize) / 2)
    //   .attr('x', ((<any>this.attrs).width / 2 - halfMinorSize) / 2)
    //   .attr(
    //     'xlink:href',
    //     'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    //   );
  }
}
