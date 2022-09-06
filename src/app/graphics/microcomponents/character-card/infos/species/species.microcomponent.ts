import { Component } from '@angular/core';
import { TypedTextShape } from 'src/app/graphics/shapes/typed-text/typed-text.shape';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({
  selector: 'rem-character-card-infos-species-microcomponent',
  template: '',
  styleUrls: ['./species.microcomponent.scss'],
})
export class CharacterCardInfosSpeciesMicrocomponent extends TypedTextShape {
  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService
  ) {
    super(d3ElementService);

    this.characterCardService.$selectedCharacters.subscribe(
      (lastSelectedCharacter) => {
        this.currentData.next(lastSelectedCharacter?.species?? '');
      }
    );
  }

  get type(): string {
    return 'Species';
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.plottedD3Element?.selection.attr('dy', '115');
  }
}
