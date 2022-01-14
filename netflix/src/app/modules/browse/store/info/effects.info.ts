import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { forkJoin } from "rxjs";
import { map, mergeMap, switchMap, tap } from "rxjs/operators";
import { Product } from "src/app/shared/models/movie.model";
import { DetailResponse } from "src/app/shared/models/productDetails.model";
import { environment } from "src/environments/environment.prod";
import { getInfo, getInfoSuccess, openInfo } from "./actions.info";

@Injectable()
export class infoEffects {
    // getInfo = createEffect(() => this.action$.pipe(
    //     ofType(getInfo),
    //     mergeMap((product) => {
    //         const params = new HttpParams()
    //         .set('api_key', environment.api_key)
    //         .set('language', 'it-IT')
            
    //         return this.http.get<DetailResponse>(`${environment.popularsUrl}${product.type}/${product.productId}`, { params })
    //             .pipe(
    //                 tap(response => console.log(response)),
    //                 map(response => getInfoSuccess({response: {...response, type:product.type}}))
    //             )
    //     })
    // ))
    getInfo = createEffect(() => this.action$.pipe(
        ofType(getInfo),
        mergeMap((product) => {
            
            const params = new HttpParams()
            .set('api_key', environment.api_key)
            .set('language', 'it-IT')
            
            const detailRes = this.http.get<DetailResponse>(`${environment.popularsUrl}${product.productType}/${product.productId}`, { params })
                .pipe(
                    tap(response => console.log(response)),
                    map(response => ({...response, type:product.productType}))
                );
            const similarsRes = this.http.get<{results: Product[]}>(`${environment.popularsUrl}${product.productType}/${product.productId}/similar`, { params })
                .pipe(
                    map(res => res.results.map(product => Product.build(product)))
                );

            return forkJoin([detailRes, similarsRes])
                    .pipe(
                        map(res => ({...res[0], similars: res[1]})),
                        map(response => getInfoSuccess({response}))
                    )
        })
    ))

    constructor(
        private action$: Actions,
        private http: HttpClient
    ){}
}