import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/models/action-type';

@Component({
  selector: 'app-action-type',
  templateUrl: './action-type.component.html',
  styleUrls: ['./action-type.component.css']
})
export class ActionTypeComponent implements OnInit {

  @Input() ActionType : ActionType;
  @Input() name : string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ActionType)
    this.name = this.ActionType.actionType.replace(/\s/g,"").toLowerCase();
  }

}
