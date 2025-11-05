import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTopCarComponent } from './about-us-top-car.component';

describe('AboutUsTopCarComponent', () => {
  let component: AboutUsTopCarComponent;
  let fixture: ComponentFixture<AboutUsTopCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsTopCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsTopCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
