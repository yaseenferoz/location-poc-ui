import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestStationComponent } from './nearest-station.component';

describe('NearestStationComponent', () => {
  let component: NearestStationComponent;
  let fixture: ComponentFixture<NearestStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearestStationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearestStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
