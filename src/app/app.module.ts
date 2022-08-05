import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardBackgroundBoxMicrocomponent } from './graphics/microcomponents/character-card/background-box/background-box.microcomponent';
import { CharacterCardMicrocomponent } from './graphics/microcomponents/character-card/character-card.microcomponent';
import { NetworkForceComponent } from './graphics/network-force/network-force.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkForceComponent,
    CharacterCardMicrocomponent,
    CharacterCardBackgroundBoxMicrocomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
