import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Character } from 'src/app/schemas/character';
import { ComponentAttribute } from 'src/app/schemas/component-attributes';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';
import { RickAndMortyService } from 'src/app/services/rick-and-morty/rick-and-morty.service';
import { SVGGraphicShape } from '../shapes/svg-graphic/svg-graphic.shape';

@Component({
  selector: 'rem-network-force',
  templateUrl: './network-force.component.html',
  styleUrls: ['./network-force.component.scss'],
})
export class NetworkForceComponent
  extends SVGGraphicShape
  implements OnInit, AfterViewInit
{
  protected mouseOverId: boolean = false;

  protected _characterId: any = null;

  constructor(
    protected remApiService: RickAndMortyService,
    protected characterCardService: CharacterCardService,
    protected override d3ElementService: D3ElementService
  ) {
    super(d3ElementService);
  }

  protected get data(): Array<Character> {
    return this.remApiService.getCharacters();
  }

  protected get characterId(): any {
    if (!this._characterId) {
    }

    return this._characterId;
  }

  public get characterCardMicrocomponentAttrs(): ComponentAttribute {
    return {
      childs: {
        'background-box': {
          attrs: {
            width: 400,
            height: 200,
            fill: 'white',
            stroke: 'black',
            'stroke-width': '2px',
          },
        },
      },
    };
  }

  ngAfterViewInit(): void {
    console.log(this.childs[0].config);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.characterCardService.hiddenStatus.subscribe((hidden) => {
      console.log(hidden ? 'Escondeu' : 'Mostrou');
    });

    // if (this.plottedD3Element)
    //   this.plottedD3Element.selection
    //     .append('rect')
    //     .attr('id', 'TESTE')
    //     .attr('width', 1400)
    //     .attr('height', 40)
    //     .attr('stroke', 'black')
    //     .attr('fill', 'blue');

    // this.svg
    //   .append('rect')
    //   .attr('width', 600)
    //   .attr('height', 40)
    //   .attr('stroke', 'black')
    //   .attr('fill', '#69a3b2');

    // var arc = d3.symbol().type(d3.symbolTriangle);

    // var triangle = this.svg
    //   .append('path')
    //   .attr('d', arc)
    //   .attr('fill', 'red')
    //   .attr('stroke', '#000')
    //   .attr('stroke-width', 1);

    // let component = this;

    // this.svg
    //   .append('circle')
    //   .style('fill', 'orange')
    //   .attr('cx', 150)
    //   .attr('cy', 150)
    //   .attr('r', 30)
    //   .on('mouseover', function (d: any) {
    //     // @ts-ignore
    //     let element = d3.select(this);

    //     component.characterCardService.show();
    //     component.characterCardService.setNewMouseOverCharacter(
    //       component.remApiService.getCharacters()[0]
    //     );
    //   })
    //   .on('mouseout', () => {
    //     component.characterCardService.hide();
    //   });
  }
}
