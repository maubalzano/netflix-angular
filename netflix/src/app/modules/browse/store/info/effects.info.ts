import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { DetailResponse } from "src/app/shared/models/productDetails.model";
import { environment } from "src/environments/environment.prod";
import { getInfo, getInfoSuccess } from "./actions.info";

@Injectable()
export class infoEffects {
    getInfo = createEffect(() => this.action$.pipe(
        ofType(getInfo),
        mergeMap(({product}) => {
            const params = new HttpParams()
            .set('api_key', environment.api_key)
            .set('language', 'it-IT')
            
            return this.http.get<DetailResponse>(`${environment.popularsUrl}${product.type}/${product.id}`, { params })
                .pipe(
                    tap(response => console.log(response)),
                    map(response => getInfoSuccess({response}))
                )
        })
    ))

    constructor(
        private action$: Actions,
        private http: HttpClient
    ){}
}