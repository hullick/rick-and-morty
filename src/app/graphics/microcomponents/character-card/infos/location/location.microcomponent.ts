import { Component } from '@angular/core';
import { TypedTextShape } from 'src/app/graphics/shapes/typed-text/typed-text.shape';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({
  selector: 'rem-character-card-infos-location-microcomponent',
  template: '',
  styleUrls: ['./location.microcomponent.scss'],
})
export class CharacterCardInfosLocationMicrocomponent extends TypedTextShape {
  get type(): string {
    return 'Location';
  }

  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService
  ) {
    super(d3ElementService);

    this.characterCardService.$selectedCharacters.subscribe(
      (lastSelectedCharacter) => {
        this.currentData.next(lastSelectedCharacter?.location.name?? '');
      }
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.plottedD3Element?.selection.attr('dy', '175');
  }
}
