import { createReducer, on } from "@ngrx/store";
import { searchSuccess } from "./search/search.actions";
import { sharedState } from "./shared.state";
import { setCurrentUserSuccess, updateUsers } from "./user/user.actions";

export const sharedReducer = createReducer(
    sharedState,
    on(setCurrentUserSuccess, (state, action) => {
        return {
            ...state,
            currentUserId: action.value
        }
    }),
    on(updateUsers, (state, action) => {
        return {
            ...state,
            users: [...action.value]
        }
    } ),
    on(searchSuccess, (state, action) => {
        return {
            ...state,
            search: [...action.products]
        }                 
    })
)
