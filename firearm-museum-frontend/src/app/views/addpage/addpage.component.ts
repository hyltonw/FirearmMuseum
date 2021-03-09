import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  pickedAdd : string = "firearm";

  constructor() { }

  ngOnInit(): void {
  }

  addPicker(event){
    console.log(event.target.value);
    this.pickedAdd = event.target.value;


  }

}
