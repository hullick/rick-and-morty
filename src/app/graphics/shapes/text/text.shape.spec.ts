import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextShape } from './text.shape';

describe('GenericGraphicComponent', () => {
  let component: TextShape;
  let fixture: ComponentFixture<TextShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextShape],
    }).compileComponents();

    fixture = TestBed.createComponent(TextShape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
