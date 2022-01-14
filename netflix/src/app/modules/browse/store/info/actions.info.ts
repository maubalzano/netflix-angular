import { createAction, props } from "@ngrx/store";
import { DetailResponse } from "src/app/shared/models/productDetails.model";

export const getInfo = createAction('[info] get', props<{productId: number, productType: string}>());
export const getInfoSuccess = createAction('[info] getSuccess', props<{response: DetailResponse}>());

export const openInfo = createAction('[modal] open', props<{productId: number, productType: string}>());
export const closeInfo = createAction('[modal] close')