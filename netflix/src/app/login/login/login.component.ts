import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showActions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
