import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosNameMicrocomponent } from './name.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosNameMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosNameMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosNameMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosNameMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
