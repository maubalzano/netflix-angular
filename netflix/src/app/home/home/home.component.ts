import { Component, OnInit } from '@angular/core';
import { NFService, NFServices } from 'src/assets/NetflixServices';
@Component({
  selector: 'netflix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  NFServiceList = NFServices;
  ngOnInit(): void {
  }

}
