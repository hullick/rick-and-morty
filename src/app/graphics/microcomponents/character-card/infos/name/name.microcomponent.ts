import { Component } from '@angular/core';
import { TextShape } from 'src/app/graphics/shapes/text/text.shape';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({
  selector: 'rem-character-card-infos-name-microcomponent',
  template: '',
  styleUrls: ['./name.microcomponent.scss'],
})
export class CharacterCardInfosNameMicrocomponent extends TextShape {
  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService
  ) {
    super(d3ElementService);

    this.characterCardService.$selectedCharacters.subscribe(
      (lastSelectedCharacter) => {
        this.currentData.next(lastSelectedCharacter?.name?? '');
      }
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.plottedD3Element?.selection.attr('class', 'rick_morty_font');
    this.plottedD3Element?.selection.attr('dy', '45');
  }
}
