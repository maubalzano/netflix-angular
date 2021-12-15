import { createReducer, on } from "@ngrx/store";
import { setCurrentUserSuccess, updateUsers } from "./user.actions";
import { initialState } from "./user.state";

const _userReducer = createReducer(
    initialState,
    on(setCurrentUserSuccess, (state, action) => {
        return {
            ...state,
            currentUserId: action.value
        }
    }),
    on(updateUsers, (state, action) => {
        return {
            ...state,
            users: [ ...action.value ]
        }
    } )

)

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}