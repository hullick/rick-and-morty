import { Component, OnInit } from '@angular/core';
import { RectShape } from 'src/app/graphics/shapes/rect/rect.shape';
import { D3ElementService } from 'src/app/services/d3-element/d3-element.service';

@Component({
  selector: 'rem-character-card-background-box-microcomponent',
  template: '',
  styleUrls: ['./background-box.microcomponent.scss'],
})
export class CharacterCardBackgroundBoxMicrocomponent
  extends RectShape
  implements OnInit
{
  protected get data(): any[] {
    return [];
  }
  constructor(d3ElementService: D3ElementService) {
    super(d3ElementService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
