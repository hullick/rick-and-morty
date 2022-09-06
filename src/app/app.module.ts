import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardAvatarMicrocomponent } from './graphics/microcomponents/character-card/avatar/avatar.microcomponent';
import { CharacterCardBackgroundBoxMicrocomponent } from './graphics/microcomponents/character-card/background-box/background-box.microcomponent';
import { CharacterCardMicrocomponent } from './graphics/microcomponents/character-card/character-card.microcomponent';
import { CharacterCardInfosGenderMicrocomponent } from './graphics/microcomponents/character-card/infos/gender/gender.microcomponent';
import { CharacterCardInfosMicrocomponent } from './graphics/microcomponents/character-card/infos/infos.microcomponent';
import { CharacterCardInfosLocationMicrocomponent } from './graphics/microcomponents/character-card/infos/location/location.microcomponent';
import { CharacterCardInfosNameMicrocomponent } from './graphics/microcomponents/character-card/infos/name/name.microcomponent';
import { CharacterCardInfosOriginMicrocomponent } from './graphics/microcomponents/character-card/infos/origin/origin.microcomponent';
import { CharacterCardInfosSpeciesMicrocomponent } from './graphics/microcomponents/character-card/infos/species/species.microcomponent';
import { CharacterCardInfosStatusMicrocomponent } from './graphics/microcomponents/character-card/infos/status/status.microcomponent';
import { CharacterCardInfosTypeMicrocomponent } from './graphics/microcomponents/character-card/infos/type/type.microcomponent';
import { CharacterNodeMicrocomponent } from './graphics/microcomponents/character-node/character-node.microcomponent';
import { NetworkForceComponent } from './graphics/network-force/network-force.component';
import { CharacterCardModal } from './microcomponents/modals/character-card/character-card.modal';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { D3Service, D3_DIRECTIVES } from './d3';

@NgModule({
  declarations: [
    AppComponent,
    NetworkForceComponent,
    CharacterCardMicrocomponent,
    CharacterCardBackgroundBoxMicrocomponent,
    CharacterCardAvatarMicrocomponent,
    CharacterCardInfosMicrocomponent,
    CharacterCardInfosNameMicrocomponent,
    CharacterCardInfosGenderMicrocomponent,
    CharacterCardInfosStatusMicrocomponent,
    CharacterCardInfosSpeciesMicrocomponent,
    CharacterCardInfosTypeMicrocomponent,
    CharacterCardInfosOriginMicrocomponent,
    CharacterCardInfosLocationMicrocomponent,
    CharacterNodeMicrocomponent,
    CharacterCardModal,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [NgbActiveModal, D3Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
