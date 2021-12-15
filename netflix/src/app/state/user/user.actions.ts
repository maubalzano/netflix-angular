import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/models/user";

export const setCurrentUser = createAction('setCurrentUser', props<{ value: number }>());
export const setCurrentUserSuccess = createAction('setCurrentUserSuccess', props<{ value: number}>());

export const addUser = createAction('addUser', props<{ value: User }>());
export const editUser = createAction('editUser', props<{ value: User }>());
export const updateUsers = createAction('updateUsers', props<{ value: User[] }>());
