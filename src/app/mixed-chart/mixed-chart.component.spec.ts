import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedChartComponent } from './mixed-chart.component';

describe('MixedChartComponent', () => {
  let component: MixedChartComponent;
  let fixture: ComponentFixture<MixedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
