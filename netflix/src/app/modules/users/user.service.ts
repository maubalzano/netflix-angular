import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { users } from 'src/assets/users';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _localStorage!: Storage;
  
  private users!: User[];
  
  private _users$ = new BehaviorSubject<User[]>(this.users);

  get users$(){
    return this._users$.asObservable()
  }

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
    ) {

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
    this.getUsers();
   }

  addUser(user: User){
    const id: number = Math.max(...this.users.map(usr => usr.id)) + 1;
    const newUser: User = {
      ...user,
      id: id
    };
    const updatedUsers: User[] = [ ...this.users, newUser];
    this.updateUsers(updatedUsers);
    this.getUsers()
  }

  editUser(user: User){
    const updatedUsers: User[] = [ ...this.users ];
    const index = updatedUsers.findIndex(usr => usr.id == user.id);
    updatedUsers[index] = { ...user };
    this.updateUsers(updatedUsers);
    this.getUsers()
  }

  navigateToBrowse(user: User){
    this.router.navigate(['browse'])
  }
}
