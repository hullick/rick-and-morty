import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericGraphicShape } from './generic-graphic.shape';

describe('GenericGraphicComponent', () => {
  let component: GenericGraphicShape;
  let fixture: ComponentFixture<GenericGraphicShape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericGraphicShape ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericGraphicShape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
