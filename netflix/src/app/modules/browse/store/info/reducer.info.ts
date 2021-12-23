import { createReducer, on } from "@ngrx/store";
import { DetailResponse, indexedInfo } from "src/app/shared/models/productDetails.model";
import { getInfoSuccess } from "./actions.info";

export interface InfoState {
    info: indexedInfo
}

export const infoState: InfoState = {
    info: {}
}
export const infoReducer = createReducer(
    infoState,
    on(getInfoSuccess, (state, action) => {
        return {
            ...state,
            info: {...state.info, [action.response.id]:action.response }
        }
    })
)

