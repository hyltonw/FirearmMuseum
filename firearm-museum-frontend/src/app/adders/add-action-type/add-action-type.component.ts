import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionType } from 'src/app/models/action-type';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-action-type',
  templateUrl: './add-action-type.component.html',
  styleUrls: ['./add-action-type.component.css']
})
export class AddActionTypeComponent implements OnInit {

  imgSrc : string = "https://i.imgur.com/FK3SITD.png";

  constructor(private service : MuseumService, private router : Router) { }

  ngOnInit(): void {
  }

  addActionType(actionType: string,actionTypeDescription: string, actionTypeUrl : string){

    let toAdd : ActionType = {actionType,actionTypeDescription,actionTypeUrl : this.imgSrc};
    return this.service.addActionType(toAdd).subscribe(x => console.log(x));
  }
}
