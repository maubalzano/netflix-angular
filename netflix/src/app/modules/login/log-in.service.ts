import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private router: Router) { }

  log(credentials: Credentials){
    // fai finta di validare le credenziali
    this.router.navigate(['users'])
  }
}
