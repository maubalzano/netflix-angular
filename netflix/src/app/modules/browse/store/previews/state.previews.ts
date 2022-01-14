import { Product } from "src/app/shared/models/movie.model";

export interface previewsState {
    populars_movie: Product[][],
    populars_tv: Product[][],
}

export const previewsState = {
    populars_movie: sessionStorage.getItem('populars_movie') ? JSON.parse(sessionStorage.getItem('populars_movie')!) : [],
    populars_tv: sessionStorage.getItem('populars_tv') ? JSON.parse(sessionStorage.getItem('populars_tv')!) : [],
}