import { Component, OnInit } from '@angular/core';
import { Selection } from 'd3';
import { Observable } from 'rxjs';
import { Character } from 'src/app/schemas/character';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';
import { RickAndMortyService } from 'src/app/services/rick-and-morty/rick-and-morty.service';
import { GenericGraphicShape } from '../../shapes/generic-graphic/generic-graphic.shape';

@Component({
  selector: 'rem-character-card-microcomponent',
  templateUrl: './character-card.microcomponent.html',
  styleUrls: ['./character-card.microcomponent.scss'],
})
export class CharacterCardMicrocomponent
  extends GenericGraphicShape
  implements OnInit
{
  protected onCurrentDataChange(): void {
    // TODO: Implement
  }

  protected g: any;
  protected name: any;

  protected nameElement:
    | Selection<SVGTextElement, unknown, HTMLElement, any>
    | undefined;

  protected get data(): Observable<Character> {
    return this.characterCardService.$selectedCharacters;
  }

  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService
  ) {
    super(d3ElementService);
  }

  private get minorFromWidthOrHeight(): number {
    return this.config.childs?.['background-box'].attrs
      ? this.config.childs?.['background-box'].attrs?.['width'] >
        this.config.childs?.['background-box'].attrs?.['height']
        ? Number(this.config.childs?.['background-box'].attrs?.['height'])
        : Number(this.config.childs?.['background-box'].attrs?.['width'])
      : 0;
  }

  private get fourthPartOfTheMinorSide(): number {
    return this.minorFromWidthOrHeight / 4;
  }

  public get avatarAttrs(): { [name: string]: number | string | boolean } {
    return {
      width: this.fourthPartOfTheMinorSide * 3,
      height: this.fourthPartOfTheMinorSide * 3,
      x: this.fourthPartOfTheMinorSide / 2,
      y: this.fourthPartOfTheMinorSide / 2,
    };
  }

  public get infosAttr(): { [name: string]: number | string | boolean } {
    return {
      transform: `translate(${
        (<number>this.config.childs?.['background-box'].attrs?.['width'] ?? 0) /
        2
      },0)`,
    };
  }

  override ngOnInit(): void {
    this.characterCardService.setNewConfig(this.config);
    super.ngOnInit();

    this.characterCardService.hiddenStatus.subscribe((hidden) => {
      this.plottedD3Element?.selection.raise();

      this.plottedD3Element?.selection.style(
        'visibility',
        hidden ? 'hidden' : 'visible'
      );
    });

    this.characterCardService.$currentConfigObservable.subscribe(
      (currentConfig) => {
        this.config = currentConfig;
        this.applyAttrs();
      }
    );
  }
}
