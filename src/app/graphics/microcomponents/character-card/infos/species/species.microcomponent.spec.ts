import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosSpeciesMicrocomponent } from './species.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosSpeciesMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosSpeciesMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosSpeciesMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosSpeciesMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
