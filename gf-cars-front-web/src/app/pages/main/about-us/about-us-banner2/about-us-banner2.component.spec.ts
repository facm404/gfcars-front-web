import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBanner2Component } from './about-us-banner2.component';

describe('AboutUsBanner2Component', () => {
  let component: AboutUsBanner2Component;
  let fixture: ComponentFixture<AboutUsBanner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsBanner2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsBanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
