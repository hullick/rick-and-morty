import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNodeMicrocomponent } from './character-node.microcomponent';

describe('CharacterNodeComponent', () => {
  let component: CharacterNodeMicrocomponent;
  let fixture: ComponentFixture<CharacterNodeMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterNodeMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterNodeMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
