import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, tap } from "rxjs/operators";
import { User } from "src/app/shared/models/user";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { setCurrentUser, setCurrentUserSuccess, addUser, editUser, updateUsers } from "./user.actions";

@Injectable()
export class UserEffects {
    saveCurrentUser = createEffect(() => this.action$.pipe(
        ofType(setCurrentUser),
        tap((action) => {
            this.localStorageService.localStorage.setItem('currentUser', JSON.stringify(action.value));
        }),
        map((action) => setCurrentUserSuccess(action))

    ));

    addUser = createEffect(() => this.action$.pipe(
        ofType(addUser),
        map((action) => {
            const users: User[] = JSON.parse(this.localStorageService.localStorage.getItem('profiles')!);
            const id: number = Math.max(...users.map(usr => usr.id)) + 1;
            const updatedUsers = [...users, { ...action.value, id: id }];
            this.localStorageService.localStorage.setItem('profiles', JSON.stringify(updatedUsers));
            return updateUsers({value: updatedUsers})
        })

    ));

    editUser = createEffect(() => this.action$.pipe(
        ofType(editUser),
        map((action) => {
            const users: User[] = JSON.parse(this.localStorageService.localStorage.getItem('profiles')!);
            const index = users.findIndex(usr => usr.id == action.value.id);
            users[index] = {...action.value};
            this.localStorageService.localStorage.setItem('profiles', JSON.stringify(users));
            return updateUsers({value: users})
        })
    ))

    constructor(
        private action$: Actions, 
        private localStorageService: LocalStorageService
        ) {}
}

