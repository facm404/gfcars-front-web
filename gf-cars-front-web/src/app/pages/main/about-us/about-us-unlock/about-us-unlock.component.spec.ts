import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsUnlockComponent } from './about-us-unlock.component';

describe('AboutUsUnlockComponent', () => {
  let component: AboutUsUnlockComponent;
  let fixture: ComponentFixture<AboutUsUnlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsUnlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsUnlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
