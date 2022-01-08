import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap, mergeMap } from "rxjs/operators";
import { Product, ProductResponse } from "src/app/shared/models/movie.model";
import { environment } from "src/environments/environment.prod";
import { search, searchSuccess } from "./search.actions";


@Injectable()
export class SearchEffects {

    search = createEffect(() => this.actions$.pipe(
            ofType(search),
            mergeMap(action => {
                console.log('effects', action.value);
                const params = new HttpParams()
                .set('api_key', environment.api_key)
                .set('language', 'it-IT')
                .set('query', encodeURI(action.value) )
                .set('page', 1);

                return this.http.get<ProductResponse>(`${environment.popularsUrl}search/multi`, {params})
                    .pipe(
                        tap(({results}) => console.log(results)),
                        map(({results}) => {
                            const products = results.filter(res => res.backdrop_path != null).map(res => Product.build(res));
                            return searchSuccess({products}) 
                            }
                        ))    
            }))
        )

     
    constructor(
        private actions$: Actions,
        private http: HttpClient
        ){

    }
}