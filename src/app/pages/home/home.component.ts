import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { MixedChartComponent } from '../../widget/mixed-chart/mixed-chart.component';
import { TableModule } from '../../widget/table/table.module';
import { TaskService } from '../../services/task.service';
import { task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent, MixedChartComponent , TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tasks: task[] = []
  tasksCompleted: task[] = []
  labels: string[] = []
  filter: object = {value: "Tout",action: ""}
  tasksByFilter: task[] = []

  constructor(private taskService: TaskService) {}

  async ngOnInit(): Promise<any> {
    this.taskService.getAll();
    await this.taskService.tasksSubject.subscribe((tasks:any) => {
      this.tasks = tasks

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
    })



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
