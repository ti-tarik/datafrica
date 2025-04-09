import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MixedChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'datafrica';
}


