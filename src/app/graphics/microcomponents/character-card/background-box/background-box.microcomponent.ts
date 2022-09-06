import { Component, OnInit } from '@angular/core';
import { RectShape } from 'src/app/graphics/shapes/rect/rect.shape';

@Component({
  selector: 'rem-character-card-background-box-microcomponent',
  template: '',
  styleUrls: ['./background-box.microcomponent.scss'],
})
export class CharacterCardBackgroundBoxMicrocomponent
  extends RectShape
{
  protected get data(): any[] {
    return [];
  }
}
