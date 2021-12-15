import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/shared/models/credentials';
import { LogInService } from '../../log-in.service';

@Component({
  selector: 'netflix-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LogInService) { }

  fakeLogIn(credentials: Credentials){
    this.loginService.log(credentials)
  }

  ngOnInit(): void {
  }

}
