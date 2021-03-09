import { Component, OnInit } from '@angular/core';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-hydrated-firearm',
  templateUrl: './add-hydrated-firearm.component.html',
  styleUrls: ['./add-hydrated-firearm.component.css']
})
export class AddHydratedFirearmComponent implements OnInit {

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
  }

  addHydratedFirearm(){
    
  }

}
