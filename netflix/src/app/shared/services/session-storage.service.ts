import { Injectable } from '@angular/core';

function getSessionStorage(): Storage {
  return sessionStorage
}

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  get sessionStorage(): Storage{
    return getSessionStorage()
  }
  
  constructor() { }
}
