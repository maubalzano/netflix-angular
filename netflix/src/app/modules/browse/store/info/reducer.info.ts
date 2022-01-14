import { createReducer, on } from "@ngrx/store";
import { DetailResponse, indexedInfo } from "src/app/shared/models/productDetails.model";
import { closeInfo, getInfoSuccess, openInfo } from "./actions.info";

export interface InfoState {
    info: indexedInfo;
    currentInfoModal: DetailResponse | undefined
}

export const infoState: InfoState = {
    info: {},
    currentInfoModal: undefined
}
export const infoReducer = createReducer(
    infoState,
    on(getInfoSuccess, (state, action) => {
        return {
            ...state,
            info: {...state.info, [action.response.id]:action.response }
        }
    }),
    on(openInfo, (state, action) => {
        return {
            ...state,
            currentInfoModal: {...state.info[action.productId]}
        }
    }),
    on(closeInfo, state => {
        return {
            ...state,
            currentInfoModal: undefined
        }
    })
)

