import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVehicleComponent } from './filter-vehicle.component';

describe('FilterVehicleComponent', () => {
  let component: FilterVehicleComponent;
  let fixture: ComponentFixture<FilterVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
