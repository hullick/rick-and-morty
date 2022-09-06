import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosGenderMicrocomponent } from './gender.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosGenderMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosGenderMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosGenderMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosGenderMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
