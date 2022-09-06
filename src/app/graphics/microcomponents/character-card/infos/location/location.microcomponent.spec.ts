import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosLocationMicrocomponent } from './location.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosLocationMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosLocationMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosLocationMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosLocationMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
