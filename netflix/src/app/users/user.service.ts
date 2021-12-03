import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { users } from 'src/assets/users';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _localStorage!: Storage;
  
  private users!: User[];
  private _users$ = new BehaviorSubject<User[]>(this.users);
  // public users$ = this._users$.asObservable()

  get users$(){
    return this._users$.asObservable()
  }

  constructor(private localStorageService: LocalStorageService) {

    this._localStorage = this.localStorageService.localStorage;
    !this._localStorage.getItem('profiles') && this._localStorage.setItem('profiles', JSON.stringify(users));
    this.getUsers()
   }
   
   getUsers(){
    this.users = JSON.parse(this._localStorage.getItem('profiles')!);
    this._users$.next(this.users)
   }

   updateUsers(users: User[]){
    this._localStorage.setItem('profiles', JSON.stringify(users));
    this.getUsers()
   }

  addUser(user: User){
    const newUser: User = {
      ...user
    };
    const updatedUsers: User[] = [ ...this.users, newUser];
    this.updateUsers(updatedUsers);
    this.getUsers()
  }
}
