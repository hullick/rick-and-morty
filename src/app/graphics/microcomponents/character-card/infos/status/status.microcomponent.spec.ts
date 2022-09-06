import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosStatusMicrocomponent } from './status.microcomponent';

describe('CharacterCardBackgroundBoxMicrocomponent', () => {
  let component: CharacterCardInfosStatusMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosStatusMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosStatusMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosStatusMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
