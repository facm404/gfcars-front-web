import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDownloadComponent } from './about-us-download.component';

describe('AboutUsDownloadComponent', () => {
  let component: AboutUsDownloadComponent;
  let fixture: ComponentFixture<AboutUsDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
