import { Component, OnInit } from '@angular/core';
import { HydratedFirearm } from 'src/app/models/hydrated-firearm';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-hydrated-firearm-container',
  templateUrl: './hydrated-firearm-container.component.html',
  styleUrls: ['./hydrated-firearm-container.component.css']
})
export class HydratedFirearmContainerComponent implements OnInit {

  hydratedFirearms : HydratedFirearm[];

  constructor(private hydrateFirearmService : MuseumService) { }

  ngOnInit(): void {
    
    this.hydrateFirearmService.getAllHydratedFirearms().subscribe( list => {
      this.hydratedFirearms = list
      console.log("first firearm in list "+this.hydratedFirearms[0])

    })
  }

}
