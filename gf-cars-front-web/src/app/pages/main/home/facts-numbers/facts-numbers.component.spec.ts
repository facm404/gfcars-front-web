import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsNumbersComponent } from './facts-numbers.component';

describe('FactsNumbersComponent', () => {
  let component: FactsNumbersComponent;
  let fixture: ComponentFixture<FactsNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
