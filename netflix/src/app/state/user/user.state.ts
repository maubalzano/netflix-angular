import { User } from "src/app/shared/models/user";
import { users } from "src/assets/users";

export interface userState {
    users: User[];
    currentUserId: number
}

export const initialState: userState = {
    users: localStorage.getItem('profiles') ? JSON.parse(window.localStorage.getItem('profiles')!) : users,
    currentUserId: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : 1
}