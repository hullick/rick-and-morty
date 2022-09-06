import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosTypeMicrocomponent } from './type.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosTypeMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosTypeMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosTypeMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosTypeMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
