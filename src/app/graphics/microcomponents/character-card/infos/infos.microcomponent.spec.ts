import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardInfosMicrocomponent } from './infos.microcomponent';

describe('CharacterCardComponent', () => {
  let component: CharacterCardInfosMicrocomponent;
  let fixture: ComponentFixture<CharacterCardInfosMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardInfosMicrocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardInfosMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
