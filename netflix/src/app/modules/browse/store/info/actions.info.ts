import { createAction, props } from "@ngrx/store";
import { DetailResponse } from "src/app/shared/models/productDetails.model";

export const getInfo = createAction('[info] get', props<{ product: {id: number, type: string}}>());
export const getInfoSuccess = createAction('[info] getSuccess', props<{response: DetailResponse}>())