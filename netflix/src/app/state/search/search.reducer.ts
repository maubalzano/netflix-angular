import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/shared/models/movie.model";
import { searchSuccess } from "./search.actions";

export const searchReducer = createReducer(
    [] as Product[],
    on(searchSuccess, (state, action) => {
        return [...state, ...action.products]              
    })
)