import { createReducer, on } from "@ngrx/store";
import { getPopularsSuccess } from "./actions.previews";
import { previewsState } from "./state.previews";

export const previewsReducer = createReducer(
    previewsState,
    on(getPopularsSuccess, (state, action) => {
        const type = `populars_${action.value.type}`;
        return {
            ...state,
            [type]: [...action.value.products] 
        }
    })
)