import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/models/action-type';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-action-type',
  templateUrl: './action-type.component.html',
  styleUrls: ['./action-type.component.css']
})
export class ActionTypeComponent implements OnInit {

  @Input() ActionType : ActionType;
  @Input() name : string;
  editing : boolean = true;

  constructor(private service: MuseumService) { }

  ngOnInit(): void {
    console.log(this.ActionType)
    this.name = this.ActionType.actionType.replace(/\s/g,"").toLowerCase();
  }

  toggleEdit(){
    this.editing=!this.editing;
  }

  editActionType(){
    this.editing=!this.editing;
    return this.service.editActionType(this.ActionType,this.ActionType.actionTypeId).subscribe(x => console.log(x))
  }

  removeActionType(){
    this.editing=!this.editing;
    return this.service.removeActionType(this.ActionType.actionTypeId).subscribe(x => console.log(x))
  }

}
