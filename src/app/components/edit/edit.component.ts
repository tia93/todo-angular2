import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public todo: Todo = {
    name: '',
    creationDate: new Date().getTime(),
    tags: [],
    priority: 0
  };

  constructor(private route: ActivatedRoute, private dataS: DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const selctedTodo = this.dataS.getTodoById(id)
      if(selctedTodo){
        this.todo = selctedTodo;
      }
    }
  }

}
