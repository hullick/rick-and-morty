import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SVGImageShape } from './svg-image.shape';

describe('GenericGraphicComponent', () => {
  let component: SVGImageShape;
  let fixture: ComponentFixture<SVGImageShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SVGImageShape],
    }).compileComponents();

    fixture = TestBed.createComponent(SVGImageShape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
