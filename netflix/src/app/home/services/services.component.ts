import { Component, OnInit } from '@angular/core';
import { NFServices } from 'src/assets/NetflixServices';

@Component({
  selector: 'netflix-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  NFServiceList = NFServices;
  constructor() { }

  ngOnInit(): void {
  }

}
