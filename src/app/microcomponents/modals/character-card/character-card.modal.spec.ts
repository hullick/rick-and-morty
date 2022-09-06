import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardModal } from './character-card.modal';

describe('CharacterCardComponent', () => {
  let component: CharacterCardModal;
  let fixture: ComponentFixture<CharacterCardModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
