import { Component, OnInit } from '@angular/core';
import { SVGImageShape } from 'src/app/graphics/shapes/svg-image/svg-image.shape';
import { CharacterCardService } from 'src/app/services/character-card/character-card.service';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({
  selector: 'rem-character-card-avatar-microcomponent',
  template: '',
  styleUrls: ['./avatar.microcomponent.scss'],
})
export class CharacterCardAvatarMicrocomponent
  extends SVGImageShape
  implements OnInit
{
  constructor(
    protected override d3ElementService: D3ElementService,
    protected characterCardService: CharacterCardService
  ) {
    super(d3ElementService);

    this.characterCardService.$selectedCharacters.subscribe(
      (lastSelectedCharacter) => {
        this.currentData.next(lastSelectedCharacter?.image ?? '');
      }
    );
  }
}
