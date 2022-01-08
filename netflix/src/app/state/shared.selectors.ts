import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

const getSharedState = createFeatureSelector<SharedState>('shared');

export const getCurrentUser = createSelector(getSharedState, (state: SharedState) => {
    return state.currentUserId
});

export const getUsers = createSelector(getSharedState, (state: SharedState) => {
    return state.users
});

export const getSearchResults = createSelector(getSharedState, (state: SharedState) => {
    return state.search
})