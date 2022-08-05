import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardMicrocomponent } from './character-card.microcomponent';


describe('CharacterCardComponent', () => {
  let component: CharacterCardMicrocomponent;
  let fixture: ComponentFixture<CharacterCardMicrocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardMicrocomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardMicrocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
