import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosOriginMicrocomponent } from './origin.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosOriginMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosOriginMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosOriginMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosOriginMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
