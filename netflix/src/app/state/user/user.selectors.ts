import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState } from "./user.state";

const getUserState = createFeatureSelector<userState>('user');

export const getCurrentUser = createSelector(getUserState, (state) => {
    return state.currentUserId
});

export const getUsers = createSelector(getUserState, (state) => {
    return state.users
} )