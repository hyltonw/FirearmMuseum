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
    if(actionType===""){
      alert("enter in an action type name")
      return;
    }
    if(actionTypeDescription===""){
      alert("enter in an action type description")
      return;
    }
    if(actionTypeUrl==="" || actionTypeUrl==="https://i.imgur.com/FK3SITD.png"){
      alert("enter in an image url")
      return;
    }
    let toAdd : ActionType = {actionType,actionTypeDescription,actionTypeUrl : this.imgSrc};
    this.router.navigateByUrl("/actiontype")
    return this.service.addActionType(toAdd).subscribe(x => console.log(x));
  }
}
