import { Component, OnInit, Input} from '@angular/core';
import {Task} from '../Task'
import {TASKS} from '../mock-task'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {

  @Input() task: Task=TASKS[0]
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
