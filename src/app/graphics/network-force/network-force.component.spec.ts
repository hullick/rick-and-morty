import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkForceComponent } from './network-force.component';

describe('NetworkForceComponent', () => {
  let component: NetworkForceComponent;
  let fixture: ComponentFixture<NetworkForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkForceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
