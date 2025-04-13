import { Component, Input, OnChanges } from '@angular/core';
import { task } from '../../models/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false
})
export class TableComponent {
  @Input() tasks:task[] = [];
  @Input() filter:any;
  @Input() tasksByFilter:task[] = [];
  search: string = '';

  onValueChange(value: string) {
    if(value.length > 0) {
      this.tasksByFilter = this.tasks.filter((task:any) => {
        /**Filter by taskid, caseid, executeeparmatricule, acteur */
        return task.taskid.toString().includes(value) ||
               task.caseid.toString().includes(value) ||
               task.executeeparmatricule.includes(value) ||
               task.acteur.toLowerCase().includes(value.toLowerCase())
      })
    }else{
      this.tasksByFilter = this.tasks
    }

  }

}
