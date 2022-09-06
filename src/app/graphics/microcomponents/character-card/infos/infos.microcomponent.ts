import {  Component } from '@angular/core';
import { GenericGraphicShape } from 'src/app/graphics/shapes/generic-graphic/generic-graphic.shape';
@Component({
  selector: 'rem-character-card-infos-microcomponent',
  templateUrl: './infos.microcomponent.html',
  styleUrls: ['./infos.microcomponent.scss'],
})
export class CharacterCardInfosMicrocomponent extends GenericGraphicShape{
  protected onCurrentDataChange(): void {
    // TODO: Implement
  }
  protected get data(): any[] {
    return [];
  }
}
