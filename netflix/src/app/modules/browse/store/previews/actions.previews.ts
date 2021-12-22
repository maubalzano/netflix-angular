import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/shared/models/movie.model";

export const getPopulars = createAction('getPopulars', props<{value: string}>());
export const getPopularsSuccess = createAction('getPopularsSuccess', props<{value: { products: Product[][], type: string}}>());

export const getDetails = createAction('getDetails', props<{id: number}>());
// export const getDetailsSuccess = createAction('getDetailsSuccess', props<{details: ProductDetails}>())