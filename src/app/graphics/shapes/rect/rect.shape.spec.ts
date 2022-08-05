import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RectShape } from './rect.shape';

describe('GenericGraphicComponent', () => {
  let component: RectShape;
  let fixture: ComponentFixture<RectShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RectShape],
    }).compileComponents();

    fixture = TestBed.createComponent(RectShape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
