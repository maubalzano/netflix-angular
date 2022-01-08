import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/shared/models/movie.model";

export const search = createAction('[search]', props<{value: string}>())
export const searchSuccess = createAction('[search] success', props<{products: Product[]}>())