import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SVGGraphicShape } from './svg-graphic.shape';


describe('GenericGraphicComponent', () => {
  let component: SVGGraphicShape;
  let fixture: ComponentFixture<SVGGraphicShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SVGGraphicShape ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SVGGraphicShape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
