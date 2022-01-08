import { users } from "src/assets/users";
import { Product } from "../shared/models/movie.model";
import { User } from "../shared/models/user";

export interface SharedState {
    
    users: User[];
    currentUserId: number;
    search: Product[]
  }
export const sharedState: SharedState = {
    
    users: localStorage.getItem('profiles') ? JSON.parse(window.localStorage.getItem('profiles')!) : users,
    currentUserId: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : 1,
    search: []
}