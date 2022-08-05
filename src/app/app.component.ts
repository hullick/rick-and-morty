import { Component } from '@angular/core';
import { ComponentAttribute } from './schemas/component-attributes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rick-morty-graphs';

  public get networkForceComponentAttr(): ComponentAttribute {
    return {
      attrs: {
        width: 1400,
        height: 600,
      },
    };
  }
}
