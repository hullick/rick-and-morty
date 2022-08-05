import { TestBed } from '@angular/core/testing';
import { D3ElementService } from './d3-element.service';


describe('GraphsServiceService', () => {
  let service: D3ElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3ElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
