import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caliber } from 'src/app/models/caliber';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-caliber',
  templateUrl: './add-caliber.component.html',
  styleUrls: ['./add-caliber.component.css']
})
export class AddCaliberComponent implements OnInit {

  imgSrc : string = "https://i.imgur.com/FK3SITD.png";

  constructor(private service : MuseumService, private router : Router) { }

  ngOnInit(): void {
  }

  addCaliber(caliberSize: string, caliberUnit: string, caliberDescription: string, imgSrc){

    if(caliberSize===""){
      alert("please enter a caliber size")
      return;
    }
    if(caliberUnit===""){
      alert("please enter a caliber name/unit")
      return;
    }
    if(caliberDescription===""){
      alert("please enter a description")
      return;
    }
    if(imgSrc==="" || imgSrc==="https://i.imgur.com/FK3SITD.png"){
      alert("please enter an image url")
      return;
    }

    let toAdd : Caliber = {caliberSize,caliberUnit,caliberDescription, caliberUrl : imgSrc};
    return this.service.addCaliber(toAdd).subscribe(x => console.log(x));
  }

}
