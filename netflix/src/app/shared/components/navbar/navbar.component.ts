import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showActions!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
