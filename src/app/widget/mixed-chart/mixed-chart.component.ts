import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrl: './mixed-chart.component.scss',
})
export class MixedChartComponent implements OnInit  {
  @Input() labels: any;
  @Input() tasks: any;
  @Input() tasksCompleted: any;
  @Input() filter: any;
  @Input() tasksByFilter: any;
  public chart: any;

  ngOnInit(): void {
    this.createChart()
  }

  createChart(){
    //Chart qui ressemble au graphe de l'exemple
    // this.chart = new Chart("chart-1", {
    //   data: {
    //     labels: ['Malakilaky', 'Immobilier', 'Scolaire','24h', 'Lorem', 'Ipsum', 'Dolor', 'Slt amet','Adisipin'],
    //     datasets: [
    //         {
    //           type: 'bar',
    //           label: 'Demande Clôturées',
    //           data: [19, 21, 19, 18, 17, 21, 22, 23, 20],
    //           backgroundColor: '#21b2ab'
    //         },
    //         {
    //           type: 'bar',
    //           label: "Autres",
    //           data: [6, 4, 6, 7, 8, 4, 3, 2, 5],
    //           backgroundColor: '#cc3d2b'
    //         },
    //         {
    //           type: 'bar',
    //           label: "Contrôle OPE",
    //           data: [12, 17, 14, 5, 12, 12, 15, 14,12],
    //           backgroundColor: '#0a46c4'
    //         },
    //         {
    //           type: 'bar',
    //           label: "Demande à valider",
    //           data: [5, 5, 5, 7, 6, 5, 5, 5, 5],
    //           backgroundColor: '#fed76c'
    //         },
    //         {
    //           type: 'bar',
    //           label: "Validation BIC",
    //           data: [2, 2, 0, 3, 0, 0, 0, 0, 0],
    //           backgroundColor: '#efc5c4'
    //         },
    //         {
    //           type: 'line',
    //           label: 'Line Dataset',
    //           data: [44, 49, 45, 41, 45, 45, 47, 45, 43],
    //           fill: false,
    //           borderColor: '#0a46c4',
    //           pointBorderWidth: 0,

    //         }
    //     ]
    //   },
    //   options: {
    //     plugins: {
    //      legend: {
    //       display: false
    //      }
    //     },
    //     scales: {
    //       x: {
    //         stacked: true,
    //       },
    //       y: {
    //         stacked: true,
    //       }
    //     }
    //   }
    // });

    this.chart = new Chart("chart-1", {
      data: {
        labels: this.labels,
        datasets: [
            {
              type: 'bar',
              label: 'Demande Clôturées',
              data: this.tasksCompleted,
              backgroundColor: '#21b2ab'
            },
            {
              type: 'line',
              label: 'Line Dataset',
              data: this.tasksCompleted,
              fill: false,
              borderColor: '#0a46c4',
              pointBorderWidth: 0
            }
        ]
      },
      options: {
        plugins: {
         legend: {
          display: false
         }
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          }
        }
      }
    });
  }



}
