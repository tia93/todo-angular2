import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() todo?: Todo;
  tagsString: string = ''
 

  constructor() { }

  ngOnInit(): void {
  }

  
}
