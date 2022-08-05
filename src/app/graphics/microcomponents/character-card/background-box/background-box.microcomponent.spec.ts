import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardBackgroundBoxMicrocomponent } from './background-box.microcomponent';

describe('BackgroundBoxComponent', () => {
  let component: CharacterCardBackgroundBoxMicrocomponent;
  let fixture: ComponentFixture<CharacterCardBackgroundBoxMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardBackgroundBoxMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardBackgroundBoxMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
