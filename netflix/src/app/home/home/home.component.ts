import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showActions: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
