export interface IProduct {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    last_air_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title?: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    name?: string
}

export interface ProductResponse {
    page: number;
    results: IProduct[];
    total_results: number;
    total_pages: number;
}

export class Product {
    protected constructor(
        public poster_path = '',
        public adult = false ,
        public overview = '',
        public release_date = '',
        public last_air_date = '',
        public genre_ids =  [0],
        public id = 0,
        public original_title = '',
        public original_language = '',
        public backdrop_path = '',
        public popularity = 0,
        public vote_count = 0,
        public video =  false,
        public vote_average = 0,
        public type = '',
        public name = '',
        public isNew = false
    ){}

    public static build(product: IProduct): Product{

        const type = product.name ? 'tv' : 'movie';
        const name = type == 'tv' ? product.name : product.title;
        const today = new Date();
        const relDate = type == 'movie' ? new Date(product.release_date): new Date(product.last_air_date);
        const isNew = today.getTime() - relDate.getTime() < (864*1400000);
        return new this(
            product.poster_path,
            product.adult,
            product.overview,
            product.release_date,
            product.last_air_date,
            product.genre_ids,
            product.id,
            product.original_title,
            product.original_language,
            product.backdrop_path,
            product.popularity,
            product.vote_count,
            product.video,
            product.vote_average,
            type,
            name,
            isNew

        );
    }
}