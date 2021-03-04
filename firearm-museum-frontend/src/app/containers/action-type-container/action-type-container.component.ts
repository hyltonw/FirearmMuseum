import { Component, OnInit } from '@angular/core';
import { ActionType } from 'src/app/models/action-type';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-action-type-container',
  templateUrl: './action-type-container.component.html',
  styleUrls: ['./action-type-container.component.css']
})
export class ActionTypeContainerComponent implements OnInit {

  actiontypes : ActionType[];

  constructor(private actiontypeservice : MuseumService ) { }

  ngOnInit(): void { 
    this.actiontypeservice.getAllActionTypes().subscribe( list => {
      this.actiontypes = list;
    })
  }

}
