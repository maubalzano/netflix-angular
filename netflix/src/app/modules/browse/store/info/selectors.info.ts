import { createSelector } from "@ngrx/store";
import { BrowseState } from "../../browse.module";
import { getBrowseState } from "../previews/selectors.previews";

export const getProductInfo = createSelector(
    getBrowseState,
    (state: BrowseState) => state.info.info
)
export const getModalInfo = createSelector(
    getBrowseState,
    (state: BrowseState) => state.info.currentInfoModal
)