import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { MixedChartComponent } from '../../widget/mixed-chart/mixed-chart.component';
import { TableModule } from '../../widget/table/table.module';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent, MixedChartComponent , TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tasks: any[] = []
  tasksCompleted: any = []
  labels: string[] = []
  filter: any = {value: "Tout",action: ""}
  tasksByFilter: any = []

  constructor(private taskService: TaskService) {}

  async ngOnInit(): Promise<any> {
    this.taskService.getAll();
    await this.taskService.tasksSubject.subscribe((tasks:any) => this.tasks = tasks)

    this.tasksCompleted =  this.tasks.reduce(
        (tasksCompleted:any[], currentValue) => {
          if(typeof currentValue.datearchivee === 'string'){
            tasksCompleted.push(parseInt(currentValue.executeeparmatricule))
          }
          return tasksCompleted
        },
        [],
    );
    this.labels =  this.tasks.reduce(
      (labels:any[], currentValue) => {
        if(typeof currentValue.datearchivee === 'string'){
          labels.push(currentValue.matricule)
        }
        return labels
      },
      [],
    );

  }

  onFilter(e:any,filterBy:string){
    this.filter = {value: e.target.text, action: filterBy}
    this.tasksByFilter = this.tasks.filter((task:any) => {
      if(filterBy === 'Acteur') {
        return task.acteur === e.target.text && task
      }else{
        return task.objectif === e.target.text && task
      }
    })
  }

}
