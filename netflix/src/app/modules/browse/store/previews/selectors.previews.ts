import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BrowseState } from "../../browse.module";
import { previewsState } from "./state.previews";

export const getBrowseState = createFeatureSelector<BrowseState>('browse');

export const getPopularMovies = createSelector(
        getBrowseState,
        (state: BrowseState) => state.previews.populars_movie
    );

export const getPopularSeries = createSelector(
        getBrowseState,
        (state: BrowseState) => state.previews.populars_tv
    )

export const getInfo = createSelector(
    getBrowseState,
    (state: BrowseState) => state.info.info
)