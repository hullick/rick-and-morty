import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardAvatarMicrocomponent } from './avatar.microcomponent';

describe('CharacterCardComponent', () => {
  let component: CharacterCardAvatarMicrocomponent;
  let fixture: ComponentFixture<CharacterCardAvatarMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardAvatarMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardAvatarMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
