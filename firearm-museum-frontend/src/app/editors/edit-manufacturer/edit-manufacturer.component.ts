import { Component, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/models/manufacturer';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
  }
}
