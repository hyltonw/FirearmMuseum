import { Component, OnInit } from '@angular/core';
import { ActionType } from 'src/app/models/action-type';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-action-type',
  templateUrl: './add-action-type.component.html',
  styleUrls: ['./add-action-type.component.css']
})
export class AddActionTypeComponent implements OnInit {

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
  }

  addActionType(actionType: string,actionTypeDescription: string){

    let toAdd : ActionType = {actionType,actionTypeDescription};
    return this.service.addActionType(toAdd).subscribe(x => console.log(x));
  }
}
