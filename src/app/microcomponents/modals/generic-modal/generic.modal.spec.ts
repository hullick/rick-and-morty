import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModal } from './generic.modal';

describe('CharacterCardComponent', () => {
  let component: GenericModal;
  let fixture: ComponentFixture<GenericModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
